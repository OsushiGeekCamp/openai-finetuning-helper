import { Example } from '@/types/example';
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
  totalTokenCount: number;
  examples: Example[];
  maxTokenCount: number;
  onMessageRoleChange: (
    exampleIndex: number,
    messageIndex: number,
    newRole: Role,
  ) => void;
  onMessageContentChange: (
    exampleIndex: number,
    messageIndex: number,
    newContent: string,
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
  totalTokenCount,
  examples,
  maxTokenCount,
  onMessageRoleChange,
  onMessageContentChange,
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
        tokenCount={totalTokenCount}
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
              onRoleChange={(newRole) => {
                setDefaultFirstRole(newRole);
              }}
              onContentChange={(newContent) => {
                setDefaultFirstMessage(newContent);
              }}
              ariaLabel='First Message Content'
            />
          </div>
        )}
        <ExampleList
          examples={examples}
          maxTokenCount={maxTokenCount}
          onMessageRoleChange={onMessageRoleChange}
          onMessageContentChange={onMessageContentChange}
          addMessageToExample={addMessageToExample}
          removeMessageFromExample={removeMessageFromExample}
          removeExample={removeExample}
        />
        <Button
          onClick={addNewExample}
          className='ml-1 mb-10 text-blue-500 dark:text-blue-700 hover:text-blue-600 active:text-blue-700 dark:hover:text-blue-600 dark:active:text-blue-700
          border border-blue-500 dark:border-blue-700 hover:border-blue-600 active:border-blue-700 dark:hover:border-blue-600 dark:active:border-blue-700'
          ariaLabel='Add New Example'
        >
          Add New Example
        </Button>
      </main>
    </div>
  );
};

export default EditorPage;
