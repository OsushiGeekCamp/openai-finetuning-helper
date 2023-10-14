import { defaultRole } from '@/types/role';
import { Message } from '@/types/message';
import { Example } from '@/types/example';

type Action =
  | { type: 'SET_EXAMPLES'; examples: Example[] }
  | { type: 'ADD_DEFAULT_EXAMPLE' }
  | { type: 'ADD_EXAMPLE'; example: Example }
  | {
      type: 'UPDATE_MESSAGE';
      exampleIndex: number;
      messageIndex: number;
      message: Message;
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
      return [...examples, { messages: [{ role: defaultRole, content: '' }] }];

    case 'ADD_EXAMPLE':
      return [...examples, action.example];

    case 'UPDATE_MESSAGE':
      currentMessages = examples[action.exampleIndex].messages;
      newExamples = updateItemInArray(examples, action.exampleIndex, {
        ...examples[action.exampleIndex],
        messages: updateItemInArray(
          currentMessages,
          action.messageIndex,
          action.message,
        ),
      });
      return newExamples;

    case 'ADD_MESSAGE_TO_EXAMPLE':
      currentMessages = examples[action.exampleIndex].messages;
      newExamples = updateItemInArray(examples, action.exampleIndex, {
        ...examples[action.exampleIndex],
        messages: [...currentMessages, { role: defaultRole, content: '' }],
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
