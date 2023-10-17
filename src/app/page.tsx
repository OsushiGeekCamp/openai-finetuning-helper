import ApiKeyForm from '@/components/api-key-form';

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
      <ApiKeyForm />
    </div>
  );
};

export default Home;
