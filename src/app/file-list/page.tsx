'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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

const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';
  if (bytes === 1) return '1 Byte';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i]
  );
};

const SORT_FIELDS = {
  NAME: 'Name',
  ID: 'ID',
  SIZE: 'Size',
  DATE_CREATED: 'Date Created',
} as const;

type SortField = (typeof SORT_FIELDS)[keyof typeof SORT_FIELDS];

const FileList = () => {
  const [jsonData, setJsonData] = useState<Response>();
  const [error, setError] = useState<string>();
  const [sortField, setSortField] = useState<SortField>(
    SORT_FIELDS.DATE_CREATED,
  );
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortableColumns: SortField[] = [
    SORT_FIELDS.NAME,
    SORT_FIELDS.ID,
    SORT_FIELDS.SIZE,
    SORT_FIELDS.DATE_CREATED,
  ];

  const sortData = (field: SortField) => {
    setSortField(field);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    const fetchData = async () => {
      const openaiApiKey = getApiKey();
      if (openaiApiKey === null) {
        setError('API key is null');
        return;
      }
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
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (sortField !== null && jsonData) {
      const sortedData = [...jsonData.data].sort((a, b) => {
        if (sortField === SORT_FIELDS.NAME) {
          return sortDirection === 'asc'
            ? a.filename.localeCompare(b.filename)
            : b.filename.localeCompare(a.filename);
        }
        if (sortField === SORT_FIELDS.ID) {
          return sortDirection === 'asc'
            ? a.id.localeCompare(b.id)
            : b.id.localeCompare(a.id);
        }
        if (sortField === SORT_FIELDS.SIZE) {
          return sortDirection === 'asc'
            ? a.bytes - b.bytes
            : b.bytes - a.bytes;
        }
        if (sortField === SORT_FIELDS.DATE_CREATED) {
          return sortDirection === 'asc'
            ? a.created_at - b.created_at
            : b.created_at - a.created_at;
        }
        return 0;
      });
      setJsonData({ ...jsonData, data: sortedData });
    }
  }, [sortField, sortDirection]);

  const handleQuickStart = async (fileId: string) => {
    const openaiApiKey = getApiKey();
    if (openaiApiKey === null) {
      setError('API key is null');
      return;
    }
    const requestBody = {
      training_file: fileId,
      model: 'gpt-3.5-turbo',
    };
    const response = await fetch('https://api.openai.com/v1/fine_tuning/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiApiKey}`,
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
    <div className='bg-gray-100 dark:bg-gray-900 min-h-screen p-8'>
      <h1 className='text-4xl font-semibold mb-6 text-gray-800 dark:text-gray-200'>
        FileList
      </h1>
      <div className='overflow-x-auto shadow-md rounded-lg'>
        <table className='min-w-full bg-white dark:bg-gray-800 divide-y divide-gray-300'>
          <thead className='bg-gray-900 dark:bg-gray-700 text-white'>
            <tr>
              {sortableColumns.map((header, index) => (
                <th
                  key={index}
                  className='sticky py-3 px-6 text-left font-medium cursor-pointer transition duration-200 rounded-lg border border-gray-900 dark:bg-gray-700 border-gray-500 border-opacity-50 hover:bg-opacity-70 dark:bg-gray-700 dark:hover:bg-gray-800'
                  onClick={() => sortData(header)}
                >
                  <div className='flex items-center justify-between'>
                    {header}
                    {sortField === header && (
                      <span className='material-symbols'>
                        {sortDirection === 'asc'
                          ? 'expand_less'
                          : 'expand_more'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              <th className='sticky py-3 px-6 text-left font-medium flex justify-center bg-gray-500 bg-opacity-50'>
                Quick Start
              </th>
            </tr>
          </thead>
          <tbody>
            {jsonData &&
              jsonData.data
                .filter((item) => item.purpose === 'fine-tune')
                .map((item, index) => (
                  <tr
                    key={index}
                    className='text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200'
                  >
                    <td>
                      <Link
                        href={{
                          pathname: '/editor',
                          query: { id: item.id, name: item.filename },
                        }}
                      >
                        <div className='py-3 px-6'>{item.filename}</div>
                      </Link>
                    </td>
                    <td>
                      <Link
                        href={{
                          pathname: '/editor',
                          query: { id: item.id, name: item.filename },
                        }}
                      >
                        <div className='py-3 px-6'>{item.id}</div>
                      </Link>
                    </td>
                    <td>
                      <Link
                        href={{
                          pathname: '/editor',
                          query: { id: item.id, name: item.filename },
                        }}
                      >
                        <div className='py-3 px-6'>
                          {formatBytes(item.bytes)}
                        </div>
                      </Link>
                    </td>
                    <td>
                      <Link
                        href={{
                          pathname: '/editor',
                          query: { id: item.id, name: item.filename },
                        }}
                      >
                        <div className='py-3 px-6'>
                          {new Date(item.created_at * 1000).toLocaleString(
                            'ja-JP',
                            {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                              hour12: false,
                            },
                          )}
                        </div>
                      </Link>
                    </td>
                    <td>
                      <Link
                        href={{
                          pathname: '/editor',
                          query: { id: item.id, name: item.filename },
                        }}
                      >
                        <div className='py-3 flex items-center justify-center'>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleQuickStart(item.id);
                            }}
                            className='flex items-center justify-center bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800 text-white px-4 py-1 rounded-lg focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150'
                          >
                            <span className={'material-symbols-fill text-2xl'}>
                              play_arrow
                            </span>
                          </button>
                        </div>
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
