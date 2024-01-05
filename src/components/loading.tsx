const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen space-x-4 bg-white dark:bg-gray-800'>
      <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900 dark:border-white'></div>
      <p className='text-lg text-gray-600 dark:text-gray-300'>Loading...</p>
    </div>
  );
};

export default Loading;
