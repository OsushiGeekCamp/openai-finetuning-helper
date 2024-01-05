import { Example } from '@/types/example';
import { Role } from '@/types/role';
import MessageList from './message-list';
import CircularIndicator from './circular-indicator';

type ExampleListProps = {
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
};

const ExampleList = ({
  examples,
  maxTokenCount,
  onMessageRoleChange,
  onMessageContentChange,
  addMessageToExample,
  removeMessageFromExample,
  removeExample,
}: ExampleListProps) =>
  examples.map((example, exampleIndex) => (
    <div key={exampleIndex} className='flex'>
      <div className='flex mx-2 relative'>
        <div className='absolute text-gray-600 dark:text-gray-300 mt-2'>
          {exampleIndex + 1}.
        </div>
        <div className='flex items-center'>
          <CircularIndicator value={example.tokenCount} max={maxTokenCount} />
        </div>
      </div>
      <div className=' mb-4 overflow-x-auto'>
        <MessageList
          messages={example.messages}
          onRoleChange={onMessageRoleChange}
          onContentChange={onMessageContentChange}
          addMessageToExample={addMessageToExample}
          removeMessageFromExample={removeMessageFromExample}
          exampleIndex={exampleIndex}
          removeExample={removeExample}
        />
      </div>
    </div>
  ));

export default ExampleList;
