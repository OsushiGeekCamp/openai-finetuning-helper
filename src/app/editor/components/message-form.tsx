import { Role } from '@/types/role';

interface MessageFormProps {
  role: Role;
  content: string;
  rows: number;
  contentPlaceholder: string;
  ariaLabel: string;
  onRoleChange: (newRole: Role) => void;
  onContentChange: (newContent: string) => void;
  removeExample?: () => void;
}

const InputStyling =
  'p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700';

const MessageForm: React.FC<MessageFormProps> = ({
  role,
  content,
  rows,
  contentPlaceholder,
  ariaLabel,
  onRoleChange,
  onContentChange,
  removeExample,
}) => {
  const handleRoleChange = (newRole: string) => {
    if (['system', 'user', 'assistant'].includes(newRole)) {
      onRoleChange(newRole as Role);
    }
  };

  return (
    <div className='flex flex-col m-1'>
      <div className='flex flex-row justify-between mb-2'>
        <select
          value={role}
          onChange={(e) => handleRoleChange(e.target.value)}
          className={InputStyling}
          aria-label='Choose Role'
        >
          <option value='system'>System</option>
          <option value='user'>User</option>
          <option value='assistant'>Assistant</option>
        </select>
        {removeExample && (
          <button
            onClick={removeExample}
            className='px-2 ml-2 bg-red-500 text-white rounded dark:bg-red-700 hover:bg-red-600 active:bg-red-700'
            aria-label='Remove This Example'
          >
            Remove
          </button>
        )}
      </div>
      <textarea
        placeholder={contentPlaceholder}
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className={InputStyling}
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
        rows={rows}
      />
    </div>
  );
};

export default MessageForm;
