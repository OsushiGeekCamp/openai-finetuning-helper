import { defaultRole, Role } from '@/types/role';
import { Message } from '@/types/message';
import { Example } from '@/types/example';

type Action =
  | { type: 'SET_EXAMPLES'; examples: Example[] }
  | { type: 'ADD_DEFAULT_EXAMPLE' }
  | { type: 'ADD_EXAMPLE'; example: Example }
  | {
      type: 'UPDATE_MESSAGE_ROLE';
      exampleIndex: number;
      messageIndex: number;
      newRole: Role;
    }
  | {
      type: 'UPDATE_MESSAGE_CONTENT';
      exampleIndex: number;
      messageIndex: number;
      newContent: string;
      getTokenCount: (content: string) => number;
    }
  | { type: 'ADD_MESSAGE_TO_EXAMPLE'; exampleIndex: number }
  | {
      type: 'REMOVE_MESSAGE_FROM_EXAMPLE';
      exampleIndex: number;
      messageIndex: number;
    }
  | { type: 'REMOVE_EXAMPLE'; exampleIndex: number };

const updateItemInArray = <T>(array: T[], index: number, newItem: T): T[] => {
  const newArray = [...array];
  newArray[index] = newItem;
  return newArray;
};

const removeItemFromArray = <T>(array: T[], index: number): T[] => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

export const examplesReducer = (
  examples: Example[],
  action: Action,
): Example[] | never => {
  let newExamples: Example[];
  let currentMessages: Message[];

  switch (action.type) {
    case 'SET_EXAMPLES':
      return action.examples;

    case 'ADD_DEFAULT_EXAMPLE':
      return [
        ...examples,
        {
          messages: [{ role: defaultRole, content: '', tokenCount: 0 }],
          tokenCount: 0,
        },
      ];

    case 'ADD_EXAMPLE':
      return [...examples, action.example];

    case 'UPDATE_MESSAGE_ROLE':
      currentMessages = examples[action.exampleIndex].messages;
      newExamples = updateItemInArray(examples, action.exampleIndex, {
        ...examples[action.exampleIndex],
        messages: updateItemInArray(currentMessages, action.messageIndex, {
          ...currentMessages[action.messageIndex],
          role: action.newRole,
        }),
      });
      return newExamples;

    case 'UPDATE_MESSAGE_CONTENT':
      const currentExample = examples[action.exampleIndex];
      currentMessages = currentExample.messages;
      const currentMessage = currentMessages[action.messageIndex];
      const tokenDiff =
        action.getTokenCount(action.newContent) - currentMessage.tokenCount;

      newExamples = updateItemInArray(examples, action.exampleIndex, {
        ...examples[action.exampleIndex],
        messages: updateItemInArray(currentMessages, action.messageIndex, {
          ...currentMessage,
          content: action.newContent,
          tokenCount: currentMessage.tokenCount + tokenDiff,
        }),
        tokenCount: currentExample.tokenCount + tokenDiff,
      });
      return newExamples;

    case 'ADD_MESSAGE_TO_EXAMPLE':
      currentMessages = examples[action.exampleIndex].messages;
      newExamples = updateItemInArray(examples, action.exampleIndex, {
        ...examples[action.exampleIndex],
        messages: [
          ...currentMessages,
          { role: defaultRole, content: '', tokenCount: 0 },
        ],
      });
      return newExamples;

    case 'REMOVE_MESSAGE_FROM_EXAMPLE':
      currentMessages = examples[action.exampleIndex].messages;
      newExamples = updateItemInArray(examples, action.exampleIndex, {
        ...examples[action.exampleIndex],
        messages: removeItemFromArray(currentMessages, action.messageIndex),
      });
      return newExamples;

    case 'REMOVE_EXAMPLE':
      return removeItemFromArray(examples, action.exampleIndex);

    default:
      throw new Error('Unknown action type.');
  }
};
