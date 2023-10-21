'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { getApiKey } from '@/utils/openai';
import Loading from '@/components/loading';

import EditorPageContainer from './editor-page';

const SpecificFileEditorPageContainer = () => {
  const searchParams = useSearchParams();
  const fileNameID = searchParams.get('id');
  const fileName = searchParams.get('name') ?? '';

  const [isLoading, setIsLoading] = useState(true);
  const [dataset, setDataset] = useState<string>();

  const fetchData = async () => {
    if (!fileNameID) {
      setIsLoading(false);
      return;
    }
    const header = {
      headers: {
        Authorization: `Bearer ${getApiKey()}`,
      },
    };

    try {
      const response = await fetch(
        `https://api.openai.com/v1/files/${fileNameID}/content`,
        header,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.text();
      setDataset(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <EditorPageContainer fileName={fileName} dataset={dataset} />;
};

export default SpecificFileEditorPageContainer;
