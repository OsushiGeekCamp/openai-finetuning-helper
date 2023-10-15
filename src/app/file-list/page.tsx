'use client';

import React, { useState, useEffect } from 'react';
import { fetchFiles } from '@/utils/openai';
import Loading from '@/components/loading';
import { getApiKey } from '@/utils/openai';

type File = {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
};

type Response = {
  data: File[];
};

const FileList = () => {
  const [jsonData, setJsonData] = useState<Response>();
  const [error, setError] = useState<string>();
  const openai_api_key = '';

  useEffect(() => {
    const fetchData = async () => {
      const openaiApiKey: string | null = getApiKey(); // Get the API key using getApiKey function
      if (openaiApiKey !== null) {
        try {
          const result = await fetchFiles(openaiApiKey);
          setJsonData(result);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        }
      } else {
        setError('API key is null');
      }
    };
    fetchData();
  }, []);

  const handleQuickStart = async (fileId: string) => {
    const requestBody = {
      training_file: fileId,
      model: 'gpt-3.5-turbo',
    };

    const response = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openai_api_key}`,
      },
      body: JSON.stringify(requestBody),
    });

    // TODO: Handle the response as required.
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jsonData) {
    return <Loading />;
  }

  return (
    <div className='bg-white dark:bg-gray-800 min-h-screen'>
      <div className='p-8'>
        <h1 className='text-2xl font-bold mb-4'>FileList</h1>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-md rounded-md'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='sticky top-0 w-1/4 bg-gray-800 text-white py-2 text-left'>
                  File-id
                </th>
                <th className='w-1/4 py-2 text-left'>object</th>
                <th className='w-1/4 py-2 text-left'>bytes</th>
                <th className='w-1/4 py-2 text-left'>created_at</th>
                <th className='w-1/4 py-2 text-left'>filename</th>
                <th className='w-1/4 py-2 text-left'>purpose</th>
                <th className='w-1/4 py-2 text-left'>Quick Start</th>{' '}
                {/* Added column for Quick Start button */}
              </tr>
            </thead>
            <tbody>
              {jsonData &&
                jsonData.data.map((item, index) => (
                  <tr key={index} className='text-gray-700 border-t'>
                    <td className='py-2 px-4 text-left border'>{item.id}</td>
                    <td className='py-2 px-4 text-left border'>
                      {item.object}
                    </td>
                    <td className='py-2 px-4 text-left border'>{item.bytes}</td>
                    <td className='py-2 px-4 text-left border'>
                      {new Date(item.created_at * 1000).toLocaleString()}
                    </td>
                    <td className='py-2 px-4 text-left border'>
                      {item.filename}
                    </td>
                    <td className='py-2 px-4 text-left border'>
                      {item.purpose}
                    </td>
                    <td className='py-2 px-4 text-left border'>
                      <button
                        onClick={() => handleQuickStart(item.id)}
                        className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue'
                      >
                        Quick Start
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FileList;
