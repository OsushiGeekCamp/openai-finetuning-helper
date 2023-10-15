'use client';

import { useEffect, useState } from 'react';
import ToggleSwitch from '@/components/toggle-switch'; // トグルスイッチコンポーネントをインポート
import { getApiKey } from '@/utils/openai';

interface JobEvent {
  id: string;
}

interface JobDetails {
  id: string;
  fine_tuned_model: string;
  status: string;
  training_file: string;
  filename?: string; // filename属性を追加
}

const openaiApiKey: string = ''; // APIキーを格納する変数を定義

const FineTuningJobsPage = () => {
  const [jobs, setJobs] = useState<JobDetails[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobDetails[]>([]);
  const [isFiltered, setIsFiltered] = useState(false); // フィルタリングが有効かどうかをトラックするstate

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
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleFilterStatus = () => {
    const succeededJobs = jobs.filter((job) => job.status === 'succeeded');
    setFilteredJobs(succeededJobs);
  };

  const handleResetFilter = () => {
    setFilteredJobs(jobs);
  };

  useEffect(() => {
    if (isFiltered) {
      setFilteredJobs(jobs.filter((job) => job.status === 'succeeded'));
    } else {
      setFilteredJobs(jobs);
    }
  }, [isFiltered, jobs]);

  return (
    <div className='bg-white dark:bg-gray-800 min-h-screen'>
      <div className='p-8'>
        <h1 className='text-2xl font-bold mb-4'>Fine Tuning Jobs</h1>
        <ToggleSwitch
          checked={isFiltered}
          label='Show only succeeded jobs'
          onChange={setIsFiltered}
        />
        <table className='min-w-full bg-white shadow-md rounded-md mt-4'>
          <thead className='bg-gray-800 text-white'>
            <tr>
              <th className='w-1/5 py-2'>Job ID</th>
              <th className='w-1/5 py-2'>Fine Tuned Model</th>
              <th className='w-1/5 py-2'>Status</th>
              <th className='w-1/5 py-2'>Training File ID</th>
              <th className='w-1/5 py-2'>File Name</th> {/* カラムを追加 */}
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id} className='text-gray-700 border-t'>
                <td className='py-2 px-4'>{job.id}</td>
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
