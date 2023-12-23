import { Example } from '@/types/example';
import { Message } from '@/types/message';
import { Role } from '@/types/role';
import ToggleSwitch from '@/components/toggle-switch';

import Button from './button';
import ExampleList from './example-list';
import Header from './header';
import MessageForm from './message-form';

interface EditorPageProps {
  handleFileDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  fileName: string;
  handleFileNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpload: () => void | Promise<void>;
  isUploadDisabled: boolean;
  copyToClipboardAsJsonl: () => void;
  downloadAsJsonl: () => void;
  examples: Example[];
  updateMessageInExample: (
    exampleIndex: number,
    messageIndex: number,
    changedMessage: Message,
  ) => void;
  addMessageToExample: (exampleIndex: number) => void;
  removeMessageFromExample: (
    exampleIndex: number,
    messageIndex: number,
  ) => void;
  removeExample: (exampleIndex: number) => void;
  addNewExample: () => void;
  showFirstMessage: boolean;
  setShowFirstMessage: (show: boolean) => void;
  defaultFirstRole: Role;
  setDefaultFirstRole: (role: Role) => void;
  defaultFirstMessage: string;
  setDefaultFirstMessage: (message: string) => void;
}

const EditorPage = ({
  handleFileDrop,
  handleDragOver,
  fileName,
  handleFileNameChange,
  handleUpload,
  isUploadDisabled,
  copyToClipboardAsJsonl,
  downloadAsJsonl,
  examples,
  updateMessageInExample,
  addMessageToExample,
  removeMessageFromExample,
  removeExample,
  addNewExample,
  showFirstMessage,
  setShowFirstMessage,
  defaultFirstRole,
  setDefaultFirstRole,
  defaultFirstMessage,
  setDefaultFirstMessage,
}: EditorPageProps) => {
  return (
    <div
      className='bg-white dark:bg-gray-800 min-h-screen'
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
    >
      <Header
        fileName={fileName}
        onFileNameChange={handleFileNameChange}
        handleUpload={handleUpload}
        isUploadDisabled={isUploadDisabled}
        downloadAsJsonl={downloadAsJsonl}
        copyToClipboardAsJsonl={copyToClipboardAsJsonl}
        examplesLength={examples.length}
      />
      <main className='container mx-auto pt-0 pr-4 pb-4 pl-4'>
        <div className='ml-1'>
          <ToggleSwitch
            checked={showFirstMessage}
            onChange={setShowFirstMessage}
            label='Set default first message'
          />
        </div>
        {showFirstMessage && (
          <div className='mb-4'>
            <MessageForm
              role={defaultFirstRole}
              content={defaultFirstMessage}
              rows={2}
              contentPlaceholder='First Message Content'
              onRoleChange={(changedMessage) => {
                setDefaultFirstRole(changedMessage.role);
                setDefaultFirstMessage(changedMessage.content);
              }}
              ariaLabel='First Message Content'
            />
          </div>
        )}
        <ExampleList
          examples={examples}
          updateMessageInExample={updateMessageInExample}
          addMessageToExample={addMessageToExample}
          removeMessageFromExample={removeMessageFromExample}
          removeExample={removeExample}
        />
        <Button
          onClick={addNewExample}
          className='bg-green-500 ml-1 text-white dark:bg-green-700 hover:bg-green-600 active:bg-green-700'
          ariaLabel='Add New Example'
        >
          Add New Example
        </Button>
      </main>
    </div>
  );
};

export default EditorPage;
