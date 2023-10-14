'use client';
import React, { useState, useEffect } from 'react';
import { fetchFiles } from '@/utils/api';
import exampleData from '@/app/example.json';

type FileDataType = {
  data: {
    id: string;
    object: string;
    bytes: number;
    created_at: number;
    filename: string;
    purpose: string;
  }[];
};

const Home = () => {
  //const [jsonData, setJsonData] = useState<FileDataType | null>(null);
  //const [error, setError] = useState<string | null>(null);

  /* useEffect(() => {
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
  }, []); */

  //デバック用  本番は上記を使用

  const [jsonData, setJsonData] = useState<FileDataType | null>(exampleData);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-white dark:bg-gray-800 min-h-screen'>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">FileList</h1>
        <table className='min-w-full bg-white shadow-md rounded-md'>
          <thead className='bg-gray-800 text-white'>
            <tr>
              <th className='w-1/4 py-2'>File-id</th>
              <th className='w-1/4 py-2'>
                object
              </th>
              <th className='w-1/4 py-2'>
                bytes
              </th>
              <th className='w-1/4 py-2'>
                created_at
              </th>
              <th className='w-1/4 py-2'>
                filename
              </th>
              <th className='w-1/4 py-2'>
                purpose
              </th>
            </tr>
          </thead>
          <tbody>
            {jsonData.data.map((item, index) => (
              <tr key={index} className='text-gray-700 border-t'>
                <td className='py-2 px-4'>
                  {item.id}
                </td>
                <td className='py-2 px-4'>
                  {item.object}
                </td>
                <td className='py-2 px-4'>
                  {item.bytes}
                </td>
                <td className='py-2 px-4'>
                  {new Date(item.created_at * 1000).toLocaleString()}
                </td>
                <td className='py-2 px-4'>
                  {item.filename}
                </td>
                <td className='py-2 px-4'>
                  {item.purpose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
