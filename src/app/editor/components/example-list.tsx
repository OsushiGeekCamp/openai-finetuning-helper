import { Example } from '@/types/example';
import { Message } from '@/types/message';
import MessageList from './message-list';

type ExampleListProps = {
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
};

const ExampleList = ({
  examples,
  updateMessageInExample,
  addMessageToExample,
  removeMessageFromExample,
  removeExample,
}: ExampleListProps) => (
  <div>
    {examples.map((example, exampleIndex) => (
      <div key={exampleIndex} className='mb-4 overflow-x-auto'>
        <MessageList
          messages={example.messages}
          updateMessageInExample={updateMessageInExample}
          addMessageToExample={addMessageToExample}
          removeMessageFromExample={removeMessageFromExample}
          exampleIndex={exampleIndex}
          removeExample={removeExample}
        />
      </div>
    ))}
  </div>
);

export default ExampleList;
