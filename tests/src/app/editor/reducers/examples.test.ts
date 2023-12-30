import { Example } from '@/types/example';
import { Message } from '@/types/message';
import { defaultRole, Role } from '@/types/role';
import { examplesReducer } from '../../../../../src/app/editor/reducers/examples';

describe('examplesReducer', () => {
  const helloText = 'Hello';
  const initialMessage: Message = {
    role: 'user',
    content: helloText,
    tokenCount: helloText.length,
  };
  const initialExamples: Example[] = [
    { messages: [initialMessage], tokenCount: helloText.length },
  ];

  it('should handle SET_EXAMPLES', () => {
    const content = 'Hi';
    const newExamples: Example[] = [
      {
        messages: [
          { role: 'user', content: content, tokenCount: content.length },
        ],
        tokenCount: content.length,
      },
    ];
    const action: { type: 'SET_EXAMPLES'; examples: Example[] } = {
      type: 'SET_EXAMPLES',
      examples: newExamples,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state).toEqual(newExamples);
  });

  it('should handle ADD_DEFAULT_EXAMPLE', () => {
    const action = {
      type: 'ADD_DEFAULT_EXAMPLE' as const,
      exampleIndex: initialExamples.length,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state).toHaveLength(2);
    expect(state[1].messages[0].role).toEqual(defaultRole);
    expect(state[1].messages[0].content).toEqual('');
    expect(state[1].messages[0].tokenCount).toEqual(0);
  });

  it('should handle ADD_EXAMPLE', () => {
    const content = 'New message';
    const newExample: Example = {
      messages: [
        { role: 'user', content: content, tokenCount: content.length },
      ],
      tokenCount: content.length,
    };
    const action: { type: 'ADD_EXAMPLE'; example: Example } = {
      type: 'ADD_EXAMPLE',
      example: newExample,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state).toHaveLength(2);
    expect(state[1]).toEqual(newExample);
  });

  it('should handle UPDATE_MESSAGE_ROLE', () => {
    const newRole = 'assistant';
    const newMessage: Message = { ...initialMessage, role: newRole };
    const action: {
      type: 'UPDATE_MESSAGE_ROLE';
      exampleIndex: number;
      messageIndex: number;
      newRole: Role;
    } = {
      type: 'UPDATE_MESSAGE_ROLE',
      exampleIndex: 0,
      messageIndex: 0,
      newRole,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state[0].messages[0]).toEqual(newMessage);
  });

  it('should handle UPDATE_MESSAGE_CONTENT', () => {
    const newContent = 'Updated message';
    const newMessage: Message = {
      ...initialMessage,
      content: newContent,
      tokenCount: newContent.length,
    };
    const action: {
      type: 'UPDATE_MESSAGE_CONTENT';
      exampleIndex: number;
      messageIndex: number;
      newContent: string;
      getTokenCount: (content: string) => number;
    } = {
      type: 'UPDATE_MESSAGE_CONTENT',
      exampleIndex: 0,
      messageIndex: 0,
      newContent,
      getTokenCount: (content: string) => content.length,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state[0].messages[0]).toEqual(newMessage);
    expect(state[0].tokenCount).toEqual(newContent.length);
  });

  it('should handle ADD_MESSAGE_TO_EXAMPLE', () => {
    const action: { type: 'ADD_MESSAGE_TO_EXAMPLE'; exampleIndex: number } = {
      type: 'ADD_MESSAGE_TO_EXAMPLE',
      exampleIndex: 0,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state[0].messages).toHaveLength(2);
    expect(state[0].messages[1].role).toEqual(defaultRole);
    expect(state[0].messages[1].content).toEqual('');
  });

  it('should handle REMOVE_MESSAGE_FROM_EXAMPLE', () => {
    const action: {
      type: 'REMOVE_MESSAGE_FROM_EXAMPLE';
      exampleIndex: number;
      messageIndex: number;
    } = {
      type: 'REMOVE_MESSAGE_FROM_EXAMPLE',
      exampleIndex: 0,
      messageIndex: 0,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state[0].messages).toHaveLength(0);
  });

  it('should handle REMOVE_EXAMPLE', () => {
    const action: { type: 'REMOVE_EXAMPLE'; exampleIndex: number } = {
      type: 'REMOVE_EXAMPLE',
      exampleIndex: 0,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state).toHaveLength(0);
  });

  it('should throw error for unknown action type', () => {
    const action: any = { type: 'UNKNOWN_ACTION' };
    expect(() => examplesReducer(initialExamples, action)).toThrow(
      'Unknown action type.',
    );
  });
});
