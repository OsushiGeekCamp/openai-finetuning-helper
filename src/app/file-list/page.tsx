'use client';
import React, { useState, useEffect } from 'react';
import { fetchFiles } from '@/utils/api';

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
  const [jsonData, setJsonData] = useState<FileDataType | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  //デバック用  本番は上記を使用

  // const [jsonData, setJsonData] = useState<FileDataType | null>(exampleData);
  // const [error, setError] = useState<string | null>(null);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!jsonData) {
  //   return <div>Loading...</div>;
  // }

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
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Home;
