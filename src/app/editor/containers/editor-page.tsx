'use client';

import { getEncoding } from 'js-tiktoken';
import { useEffect, useReducer, useState } from 'react';

import { copyToClipboard } from '@/utils/clipboard';
import { Example } from '@/types/example';
import { Message } from '@/types/message';
import { defaultRole, Role } from '@/types/role';
import { getApiKey } from '@/utils/openai'; // Get the API key using getApiKey function

import { examplesReducer } from '../reducers/examples';
import EditorPage from '../components/editor-page';

type MessageSerialized = Omit<Message, 'tokenCount'>;
type ExampleSerialized = {
  messages: MessageSerialized[];
};

const encoding = getEncoding('cl100k_base');

const getTokenCount = (text: string) => encoding.encode(text).length;

const messageDeserialize = (message: MessageSerialized): Message => {
  return {
    ...message,
    tokenCount: encoding.encode(message.content).length,
  };
};

const exampleDeserialize = (example: ExampleSerialized): Example => {
  const messages = example.messages.map(messageDeserialize);
  return {
    messages: messages,
    tokenCount: messages.reduce(
      (count, message) => count + message.tokenCount,
      0,
    ),
  };
};

const messageSerialize = (message: Message): MessageSerialized => {
  return {
    ...message,
  };
};

const exampleSerialize = (example: Example): ExampleSerialized => {
  return {
    messages: example.messages.map(messageSerialize),
  };
};

const examplesFromJsonl = (jsonl?: string) => {
  const defaultExamples: Example[] = [
    {
      messages: [{ role: defaultRole, content: '', tokenCount: 0 }],
      tokenCount: 0,
    },
  ];
  if (!jsonl) {
    return defaultExamples;
  }
  try {
    return jsonl.split('\n').map((line) => {
      const exampleSerialized = JSON.parse(line) as ExampleSerialized;
      return exampleDeserialize(exampleSerialized);
    });
  } catch (e) {
    return defaultExamples;
  }
};

const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  event.preventDefault();
  event.returnValue = '';
};

const calculateTotalTokenCount = (examples: Example[]) =>
  examples.reduce((count, example) => count + example.tokenCount, 0);

const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};

interface EditorPageContainerProps {
  fileName: string;
  dataset?: string;
}

const EditorPageContainer = ({
  fileName: initialFileName,
  dataset,
}: EditorPageContainerProps) => {
  const [fileName, setFileName] = useState(initialFileName);
  const [examples, dispatchExamples] = useReducer(
    examplesReducer,
    examplesFromJsonl(dataset),
  );
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [defaultFirstRole, setDefaultFirstRole] = useState(defaultRole);
  const [defaultFirstMessage, setDefaultFirstMessage] = useState('');
  const [defaultFirstMessageToken, setDefaultFirstMessageToken] = useState(0);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isUploadDisabled, setIsUploadDisabled] = useState(false);
  const [totalTokenCount, setTotalTokenCount] = useState(0);

  useEffect(() => {
    setApiKey(getApiKey()?.trim() ?? null);
  }, []);

  useEffect(() => {
    setIsUploadDisabled(
      !apiKey || fileName.length === 0 || examples.length === 0,
    );
  }, [apiKey, fileName, examples]);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    setTotalTokenCount(calculateTotalTokenCount(examples));
  }, [examples]);

  useEffect(() => {
    const defaultFirstMessageToken =
      encoding.encode(defaultFirstMessage).length;
    setDefaultFirstMessageToken(defaultFirstMessageToken);
  }, [defaultFirstMessage]);

  const examplesToJsonl = () => {
    return examples
      .map((example) => {
        return JSON.stringify(exampleSerialize(example));
      })
      .join('\n');
  };

  const createJsonlBlob = (jsonlData: string) => {
    return new Blob([jsonlData], { type: 'application/jsonl' });
  };

  const copyToClipboardAsJsonl = () => {
    copyToClipboard(examplesToJsonl());
  };

  const downloadAsJsonl = () => {
    const jsonlData = examplesToJsonl();
    const file = createJsonlBlob(jsonlData);
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    if (files.length === 0) return;

    if (
      !window.confirm(
        'Are you sure you want to overwrite the content with this file?',
      )
    ) {
      return;
    }

    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const examples = examplesFromJsonl(content);
      dispatchExamples({ type: 'SET_EXAMPLES', examples });
    };
    reader.readAsText(file);
  };

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value.trim());
  };

  async function handleUpload() {
    const jsonlData = examplesToJsonl();
    const file = createJsonlBlob(jsonlData);
    const formData = new FormData();
    formData.append('file', file, fileName);
    formData.append('purpose', 'fine-tune');
    try {
      const response = await fetch('https://api.openai.com/v1/files', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Failed to upload data: ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log('Data uploaded successfully:', responseData);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  }

  const addNewExample = () => {
    if (showFirstMessage) {
      dispatchExamples({
        type: 'ADD_EXAMPLE',
        example: {
          messages: [
            {
              role: defaultFirstRole,
              content: defaultFirstMessage,
              tokenCount: defaultFirstMessageToken,
            },
          ],
          tokenCount: defaultFirstMessageToken,
        },
      });
    } else {
      dispatchExamples({ type: 'ADD_DEFAULT_EXAMPLE' });
    }
  };

  const onMessageRoleChange = (
    exampleIndex: number,
    messageIndex: number,
    newRole: Role,
  ) => {
    dispatchExamples({
      type: 'UPDATE_MESSAGE_ROLE',
      exampleIndex,
      messageIndex,
      newRole,
    });
  };

  const onMessageContentChange = (
    exampleIndex: number,
    messageIndex: number,
    newContent: string,
  ) => {
    dispatchExamples({
      type: 'UPDATE_MESSAGE_CONTENT',
      exampleIndex,
      messageIndex,
      newContent,
      getTokenCount,
    });
  };

  const addMessageToExample = (exampleIndex: number) => {
    dispatchExamples({ type: 'ADD_MESSAGE_TO_EXAMPLE', exampleIndex });
  };

  const removeMessageFromExample = (
    exampleIndex: number,
    messageIndex: number,
  ) => {
    dispatchExamples({
      type: 'REMOVE_MESSAGE_FROM_EXAMPLE',
      exampleIndex,
      messageIndex: messageIndex,
    });
  };

  const removeExample = (exampleIndex: number) => {
    dispatchExamples({ type: 'REMOVE_EXAMPLE', exampleIndex });
  };

  return (
    <EditorPage
      handleFileDrop={handleFileDrop}
      handleDragOver={handleDragOver}
      fileName={fileName}
      handleFileNameChange={handleFileNameChange}
      handleUpload={handleUpload}
      isUploadDisabled={isUploadDisabled}
      copyToClipboardAsJsonl={copyToClipboardAsJsonl}
      downloadAsJsonl={downloadAsJsonl}
      totalTokenCount={totalTokenCount}
      examples={examples}
      maxTokenCount={16385}
      onMessageRoleChange={onMessageRoleChange}
      onMessageContentChange={onMessageContentChange}
      addMessageToExample={addMessageToExample}
      removeMessageFromExample={removeMessageFromExample}
      removeExample={removeExample}
      addNewExample={addNewExample}
      showFirstMessage={showFirstMessage}
      setShowFirstMessage={setShowFirstMessage}
      defaultFirstRole={defaultFirstRole}
      setDefaultFirstRole={setDefaultFirstRole}
      defaultFirstMessage={defaultFirstMessage}
      setDefaultFirstMessage={setDefaultFirstMessage}
    />
  );
};

export default EditorPageContainer;
