'use client';

import { useReducer, useState } from 'react';

import { copyToClipboard } from '@/utils/clipboard';
import { Example } from '@/types/example';
import { Message } from '@/types/message';
import { defaultRole } from '@/types/role';
import { getApiKey } from '@/utils/openai'; // Get the API key using getApiKey function

import { examplesReducer } from '../reducers/examples';
import EditorPage from '../components/editor-page';

const examplesFromJsonl = (jsonl?: string) => {
  const defaultExamples: Example[] = [
    { messages: [{ role: defaultRole, content: '' }] },
  ];

  if (!jsonl) {
    return defaultExamples;
  }
  try {
    return jsonl.split('\n').map((line) => {
      return JSON.parse(line) as Example;
    });
  } catch (e) {
    return defaultExamples;
  }
};

const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};

interface EditorPageContainerProps {
  apiKey?: string | null;
  fileName?: string;
  dataset?: string;
}

const EditorPageContainer = ({
  apiKey,
  fileName: initialFileName,
  dataset,
}: EditorPageContainerProps) => {
  apiKey = getApiKey(); // Get the API key using getApiKey function
  const [fileName, setFileName] = useState(initialFileName ?? '');
  const [examples, dispatchExamples] = useReducer(
    examplesReducer,
    examplesFromJsonl(dataset),
  );
  const [showFirstMessage, setShowFirstMessage] = useState(true);
  const [defaultFirstRole, setDefaultFirstRole] = useState(defaultRole);
  const [defaultFirstMessage, setDefaultFirstMessage] = useState('');

  const isUploadDisabled = !apiKey?.trim() || !fileName.trim();

  const examplesToJsonl = () => {
    return examples
      .map((example) => {
        return JSON.stringify(example);
      })
      .join('\n');
  };

  const copyToClipboardAsJsonl = () => {
    copyToClipboard(examplesToJsonl());
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
    setFileName(event.target.value);
  };

  async function handleUpload() {
    const jsonlData = examplesToJsonl();
    const file = new Blob([jsonlData], { type: 'application/jsonl' });
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
          messages: [{ role: defaultFirstRole, content: defaultFirstMessage }],
        },
      });
    } else {
      dispatchExamples({ type: 'ADD_DEFAULT_EXAMPLE' });
    }
  };

  const updateMessageInExample = (
    exampleIndex: number,
    messageIndex: number,
    message: Message,
  ) => {
    dispatchExamples({
      type: 'UPDATE_MESSAGE',
      exampleIndex,
      messageIndex: messageIndex,
      message,
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
      examples={examples}
      updateMessageInExample={updateMessageInExample}
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
