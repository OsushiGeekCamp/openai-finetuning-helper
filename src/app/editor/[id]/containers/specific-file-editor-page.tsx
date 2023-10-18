'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { getApiKey } from '@/utils/openai';

import SpecificFileEditorPage from '../components/specific-file-editor-page';

const SpecificFileEditorPageContainer = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [fileName, setFileName] = useState('');
  const [dataset, setDataset] = useState('');
  const [error, setError] = useState(false);

  const fetchData = (id: string) => {
    const header = {
      headers: {
        Authorization: `Bearer ${getApiKey()}`,
      },
    };

    const fetchFileDetails = fetch(
      `https://api.openai.com/v1/files/${id}`,
      header,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        if (result.object !== 'file') {
          throw new Error('Invalid file object');
        }
        if (result.purpose !== 'fine-tune') {
          throw new Error('Invalid file purpose');
        }
        setFileName(result.filename);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });

    const fetchFileContent = fetch(
      `https://api.openai.com/v1/files/${id}/content`,
      header,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.text();
      })
      .then((result) => {
        setDataset(result);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });

    return Promise.all([fetchFileDetails, fetchFileContent]);
  };

  useEffect(() => {
    fetchData(params.id);
  }, [params.id]);

  useEffect(() => {
    if (error) {
      router.push('/editor');
    }
  }, [router, error]);

  return <SpecificFileEditorPage fileName={fileName} dataset={dataset} />;
};

export default SpecificFileEditorPageContainer;
