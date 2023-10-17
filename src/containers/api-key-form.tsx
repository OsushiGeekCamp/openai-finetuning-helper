'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ApiKeyForm from '@/components/api-key-form';
import { saveApiKey, getApiKey } from '@/utils/openai';

const ApiKeyFormContainer = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedApiKey = getApiKey();
    if (savedApiKey) {
      setInputValue(savedApiKey);
    }
  }, []);

  const handleInputChange = (newValue: string): void => {
    setInputValue(newValue);
  };

  const handleSubmit = (): void => {
    saveApiKey(inputValue);
    router.push('/file-list');
  };

  return (
    <ApiKeyForm
      inputValue={inputValue}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export default ApiKeyFormContainer;
