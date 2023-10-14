'use client';
import React, { useState, useEffect } from 'react';
import { fetchFiles } from '@/utils/api';

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

const Home = () => {
  const [jsonData, setJsonData] = useState<Response | null>(null);
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jsonData) {
    return <div>Loading...</div>;
  }
  // const jsonData = JSON.parse(fs.readFileSync('./src/app/example.json'));

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
export default Home;
