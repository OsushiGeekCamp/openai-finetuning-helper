'use client';

import { useEffect, useState } from 'react';
import ToggleSwitch from '@/components/toggle-switch'; // トグルスイッチコンポーネントをインポート
import { getApiKey } from '@/utils/openai';

interface JobEvent {
  id: string;
}

interface JobDetails {
  id: string;
  created_at: number;
  fine_tuned_model: string;
  status: string;
  training_file: string;
  filename?: string; // filename属性を追加
}

const openaiApiKey: string = ''; // APIキーを格納する変数を定義

const SORT_FIELDS = {
  JOB_ID: 'Job ID',
  JOB_CREATED: 'Job Created',
  FINE_TUNED_MODEL: 'Fine Tuned Model',
  STATUS: 'Status',
  TRAINING_FILE_ID: 'Training File ID',
  FILE_NAME: 'File Name',
} as const;

type SortField = (typeof SORT_FIELDS)[keyof typeof SORT_FIELDS];

const sortableColumns: SortField[] = [
  SORT_FIELDS.JOB_ID,
  SORT_FIELDS.JOB_CREATED,
  SORT_FIELDS.FINE_TUNED_MODEL,
  SORT_FIELDS.STATUS,
  SORT_FIELDS.TRAINING_FILE_ID,
  SORT_FIELDS.FILE_NAME,
];

const FineTuningJobsPage = () => {
  const [jobs, setJobs] = useState<JobDetails[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobDetails[]>([]);
  const [isFiltered, setIsFiltered] = useState(false); // フィルタリングが有効かどうかをトラックするstate
  const [sortField, setSortField] = useState<SortField>(SORT_FIELDS.FILE_NAME);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortData = (field: SortField) => {
    setSortField(field);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const openaiApiKey = getApiKey(); // Get the API key using getApiKey function
        const response = await fetch(
          'https://api.openai.com/v1/fine_tuning/jobs',
          {
            headers: {
              Authorization: `Bearer ${openaiApiKey}`,
            },
          },
        );
        const data = await response.json();
        const jobEvents: JobEvent[] = data.data;

        const jobDetailsPromises = jobEvents.map((event) =>
          fetch(`https://api.openai.com/v1/fine_tuning/jobs/${event.id}`, {
            headers: {
              Authorization: `Bearer ${openaiApiKey}`,
            },
          }).then((res) => res.json()),
        );

        let fetchedJobs: JobDetails[] = await Promise.all(jobDetailsPromises);

        const filenamesPromises = fetchedJobs.map((job) =>
          fetch(`https://api.openai.com/v1/files/${job.training_file}`, {
            headers: {
              Authorization: `Bearer ${openaiApiKey}`,
            },
          }).then((res) => res.json()),
        );

        const filenamesData = await Promise.all(filenamesPromises);

        fetchedJobs = fetchedJobs.map((job, index) => {
          return {
            ...job,
            filename: filenamesData[index].filename,
          };
        });

        setJobs(fetchedJobs);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (sortField !== null && jobs) {
      const sortedJobs = [...jobs].sort((a, b) => {
        if (sortField === SORT_FIELDS.JOB_ID) {
          return sortDirection === 'asc'
            ? a.id.localeCompare(b.id)
            : b.id.localeCompare(a.id);
        }
        if (sortField === SORT_FIELDS.JOB_CREATED) {
          return sortDirection === 'asc'
            ? a.created_at - b.created_at
            : b.created_at - a.created_at;
        }
        if (sortField === SORT_FIELDS.FINE_TUNED_MODEL) {
          return sortDirection === 'asc'
            ? a.fine_tuned_model.localeCompare(b.fine_tuned_model)
            : b.fine_tuned_model.localeCompare(a.fine_tuned_model);
        }
        if (sortField === SORT_FIELDS.STATUS) {
          return sortDirection === 'asc'
            ? a.status.localeCompare(b.status)
            : b.status.localeCompare(a.status);
        }
        if (sortField === SORT_FIELDS.TRAINING_FILE_ID) {
          return sortDirection === 'asc'
            ? a.training_file.localeCompare(b.training_file)
            : b.training_file.localeCompare(a.training_file);
        }
        if (sortField === SORT_FIELDS.FILE_NAME) {
          return sortDirection === 'asc'
            ? (a.filename ?? '').localeCompare(b.filename ?? '')
            : (b.filename ?? '').localeCompare(a.filename ?? '');
        }
        return 0;
      });
      setJobs(sortedJobs);
    }
  }, [sortField, sortDirection]);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    if (isFiltered) {
      setFilteredJobs(jobs.filter((job) => job.status === 'succeeded'));
    } else {
      setFilteredJobs(jobs);
    }
  }, [isFiltered, jobs]);

  return (
    <div className='bg-white dark:bg-gray-900 min-h-screen'>
      <div className='p-8'>
        <h1 className='text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200'>
          Fine Tuning Jobs
        </h1>
        <ToggleSwitch
          checked={isFiltered}
          label='Show only succeeded jobs'
          onChange={setIsFiltered}
        />
        <table className='min-w-full bg-white dark:bg-gray-800 divide-y divide-gray-300'>
          <thead className='bg-gray-900 dark:bg-gray-700 text-white'>
            <tr>
              {sortableColumns.map((header, index) => (
                <th
                  key={index}
                  className='w-1/5 py-2 cursor-pointer'
                  onClick={() => sortData(header)}
                >
                  <div className='flex items-center justify-between'>
                    {header}
                    {sortField === header && (
                      <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-800 dark:text-gray-200'>
            {filteredJobs.map((job) => (
              <tr key={job.id} className='border-t dark:border-gray-700'>
                <td className='py-2 px-4'>{job.id}</td>
                <td className='py-2 px-4'>
                  {new Date(job.created_at * 1000).toLocaleString()}
                </td>
                <td className='py-2 px-4'>{job.fine_tuned_model}</td>
                <td className='py-2 px-4'>{job.status}</td>
                <td className='py-2 px-4'>{job.training_file}</td>
                <td className='py-2 px-4'>{job.filename}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FineTuningJobsPage;
