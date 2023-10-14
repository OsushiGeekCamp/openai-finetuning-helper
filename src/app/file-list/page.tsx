'use client';

import React, { useState, useEffect } from 'react';
import { fetchFiles } from '@/utils/api';
import Loading from '@/components/loading';

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

const FileListPage = () => {
  const [jsonData, setJsonData] = useState<Response>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFiles('');
        setJsonData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div className='bg-white dark:bg-gray-800 min-h-screen'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <h1 className='text-2xl font-semibold'>{error}</h1>
        </div>
      </div>
    );
  }

  if (!jsonData) {
    return <Loading />;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!jsonData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='bg-white dark:bg-gray-800 min-h-screen'>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b border-gray-200 text-left'>id</th>
            <th className='py-2 px-4 border-b border-gray-200 text-left'>
              object
            </th>
            <th className='py-2 px-4 border-b border-gray-200 text-left'>
              bytes
            </th>
            <th className='py-2 px-4 border-b border-gray-200 text-left'>
              created_at
            </th>
            <th className='py-2 px-4 border-b border-gray-200 text-left'>
              filename
            </th>
            <th className='py-2 px-4 border-b border-gray-200 text-left'>
              purpose
            </th>
            <th className='w-1/4 py-2 text-left'>object</th>
            <th className='w-1/4 py-2 text-left'>bytes</th>
            <th className='w-1/4 py-2 text-left'>created_at</th>
            <th className='w-1/4 py-2 text-left'>filename</th>
            <th className='w-1/4 py-2 text-left'>purpose</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.data.map((item, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b border-gray-200 text-left'>
                {item.id}
              </td>
              <td className='py-2 px-4 border-b border-gray-200 text-left'>
                {item.object}
              </td>
              <td className='py-2 px-4 border-b border-gray-200 text-left'>
                {item.bytes}
              </td>
              <td className='py-2 px-4 border-b border-gray-200 text-left'>
                {item.created_at}
              </td>
              <td className='py-2 px-4 border-b border-gray-200 text-left'>
                {item.filename}
              </td>
              <td className='py-2 px-4 border-b border-gray-200 text-left'>
                {item.purpose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileListPage;
