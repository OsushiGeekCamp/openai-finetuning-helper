'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import ApiKeyForm from '@/components/api-key-form';
import { saveApiKey } from '@/utils/openai';

const ApiKeyFormContainer = () => {
  const router = useRouter();
  const [apiKey, setApiKey] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clientSideSubmit = () => {
    saveApiKey(apiKey);
    router.push('/file-list');
  };

  return (
    <ApiKeyForm
      apiKey={apiKey}
      onApiKeyChange={setApiKey}
      onSubmit={isClient ? clientSideSubmit : () => {}}
    />
  );
};

export default ApiKeyFormContainer;
