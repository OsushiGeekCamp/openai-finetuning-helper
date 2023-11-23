import { Example } from '@/types/example';
import { Message } from '@/types/message';
import { defaultRole } from '@/types/role';
import { examplesReducer } from '../../../../../src/app/editor/reducers/examples';

describe('examplesReducer', () => {
  const initialExamples: Example[] = [
    { messages: [{ role: 'user', content: 'Hello' }] },
  ];

  it('should handle SET_EXAMPLES', () => {
    const newExamples: Example[] = [
      { messages: [{ role: 'user', content: 'Hi' }] },
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
  });

  it('should handle ADD_EXAMPLE', () => {
    const newExample: Example = {
      messages: [{ role: 'user', content: 'New message' }],
    };
    const action: { type: 'ADD_EXAMPLE'; example: Example } = {
      type: 'ADD_EXAMPLE',
      example: newExample,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state).toHaveLength(2);
    expect(state[1]).toEqual(newExample);
  });

  it('should handle UPDATE_MESSAGE', () => {
    const newMessage: Message = { role: 'user', content: 'Updated message' };
    const action: {
      type: 'UPDATE_MESSAGE';
      exampleIndex: number;
      messageIndex: number;
      message: Message;
    } = {
      type: 'UPDATE_MESSAGE',
      exampleIndex: 0,
      messageIndex: 0,
      message: newMessage,
    };
    const state = examplesReducer(initialExamples, action);
    expect(state[0].messages[0]).toEqual(newMessage);
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
