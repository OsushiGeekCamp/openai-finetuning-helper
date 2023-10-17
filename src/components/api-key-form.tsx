interface ApiKeyFormProps {
  inputValue: string;
  handleSubmit: () => void;
  handleInputChange: (apiKey: string) => void;
}

const ApiKeyForm = ({
  inputValue,
  handleSubmit,
  handleInputChange,
}: ApiKeyFormProps) => {
  return (
    <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md'>
      <h2 className='mb-4 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100'>
        Enter Your OpenAI API Key
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className='mb-4'>
          <input
            name='api-key'
            type='password'
            required
            className='mt-1 p-2 w-full border dark:border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300'
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <button
            type='submit'
            className='w-full p-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:hover:bg-indigo-500'
          >
            Save API Key
          </button>
        </div>
      </form>
      <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>
        Your API key is stored locally and will not be sent to any external
        sources other than OpenAI.
      </p>
    </div>
  );
};

export default ApiKeyForm;
