const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen space-x-4'>
      <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900'></div>
      <p className='text-lg text-gray-600'>Loading...</p>
    </div>
  );
};

export default Loading;
