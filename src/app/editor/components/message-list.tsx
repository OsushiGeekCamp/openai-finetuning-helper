import { Message } from '@/types/message';
import { Role } from '@/types/role';
import Button from './button';
import MessageForm from './message-form';

type MessageListProps = {
  messages: Message[];
  onRoleChange: (
    exampleIndex: number,
    messageIndex: number,
    newRole: Role,
  ) => void;
  onContentChange: (
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
  exampleIndex: number;
};

const MessageList = ({
  messages,
  onRoleChange,
  onContentChange,
  addMessageToExample,
  removeMessageFromExample,
  removeExample,
  exampleIndex,
}: MessageListProps) => (
  <div className='flex space-x-4 mb-1'>
    {messages.map((message, messageIndex) => (
      <MessageForm
        key={messageIndex}
        role={message.role}
        content={message.content}
        rows={4}
        contentPlaceholder='Message Content'
        onRoleChange={(newRole) =>
          onRoleChange(exampleIndex, messageIndex, newRole)
        }
        onContentChange={(newContent) =>
          onContentChange(exampleIndex, messageIndex, newContent)
        }
        removeExample={() =>
          removeMessageFromExample(exampleIndex, messageIndex)
        }
        ariaLabel={`Message ${messageIndex + 1} in Example ${exampleIndex + 1}`}
      />
    ))}
    <div className='flex flex-col my-1'>
      <Button
        onClick={() => addMessageToExample(exampleIndex)}
        className='h-1/2 bg-blue-500 text-white dark:bg-blue-700 hover:bg-blue-600 active:bg-blue-700 mb-2'
        ariaLabel={`Add New Message to [${exampleIndex + 1}] Example`}
      >
        Add New
        <br />
        Message
      </Button>

      <Button
        onClick={() => removeExample(exampleIndex)}
        className='h-1/2 bg-red-500 text-white dark:bg-red-700 hover:bg-red-600 active:bg-red-700'
        ariaLabel={`Remove [${exampleIndex + 1}] Example`}
      >
        Remove This
        <br />
        Example
      </Button>
    </div>
  </div>
);

export default MessageList;
