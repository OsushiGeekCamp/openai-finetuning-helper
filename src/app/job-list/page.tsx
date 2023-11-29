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

const SORT_FIELDS = {
  ID: 'Job ID',
  CREATED_AT: 'Job Created',
  FINE_TUNED_MODEL: 'Fine Tuned Model',
  STATUS: 'Status',
  TRAINING_FILE: 'Training File ID',
  FILENAME: 'File Name',
} as const;

type SortField = keyof typeof SORT_FIELDS;

const sortableColumns: SortField[] = [
  'ID',
  'CREATED_AT',
  'FINE_TUNED_MODEL',
  'STATUS',
  'TRAINING_FILE',
  'FILENAME',
];

const compareFields = (
  a: JobDetails,
  b: JobDetails,
  field: keyof JobDetails,
  direction: 'asc' | 'desc',
) => {
  if (typeof a[field] === 'string' && typeof b[field] === 'string') {
    return direction === 'asc'
      ? (a[field] as string).localeCompare(b[field] as string)
      : (b[field] as string).localeCompare(a[field] as string);
  } else if (typeof a[field] === 'number' && typeof b[field] === 'number') {
    return direction === 'asc'
      ? (a[field] as number) - (b[field] as number)
      : (b[field] as number) - (a[field] as number);
  }
  return 0;
};

const FineTuningJobsPage = () => {
  const [jobs, setJobs] = useState<JobDetails[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobDetails[]>([]);
  const [isFiltered, setIsFiltered] = useState(false); // フィルタリングが有効かどうかをトラックするstate
  const [sortField, setSortField] = useState<SortField>('CREATED_AT');
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
        const jobDetailKey = sortField
          .toLowerCase()
          .replace(/ /g, '_') as keyof JobDetails;
        return compareFields(a, b, jobDetailKey, sortDirection);
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
                  className='sticky top-0 py-3 px-6 text-left font-medium cursor-pointer transition duration-200 bg-gray-500 bg-opacity-50 hover:bg-opacity-70 dark:bg-gray-700 dark:hover:bg-gray-800'
                  onClick={() => sortData(header)}
                >
                  <div className='flex items-center justify-between'>
                    {SORT_FIELDS[header]}
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
