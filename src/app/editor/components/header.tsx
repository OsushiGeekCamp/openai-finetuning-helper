import React from 'react';
import Button from './button';

interface HeaderProps {
  fileName: string;
  onFileNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpload: () => void | Promise<void>;
  isUploadDisabled: boolean;
  downloadAsJsonl: () => void;
  copyToClipboardAsJsonl: () => void;
  tokenCount: number;
  examplesLength: number;
}

const getUploadButtonClasses = (isDisabled: boolean) =>
  isDisabled
    ? 'text-gray-300 dark:text-gray-500 cursor-not-allowed border border-gray-300 dark:border-gray-500'
    : 'text-yellow-500 dark:text-yellow-700 hover:text-yellow-600 active:text-yellow-700 dark:border-yellow-700 dark:hover:border-yellow-600 dark:active:border-yellow-700 border border-yellow-500 dark:border-yellow-700 hover:border-yellow-600 active:border-yellow-700 dark:hover:border-yellow-600 dark:active:border-yellow-700';

const Header = ({
  fileName,
  onFileNameChange,
  handleUpload,
  isUploadDisabled,
  downloadAsJsonl,
  copyToClipboardAsJsonl,
  tokenCount,
  examplesLength,
}: HeaderProps) => (
  <header className='container mx-auto sticky top-0 z-50 bg-white dark:bg-gray-800 p-4 flex justify-between items-center whitespace-nowrap overflow-x-auto'>
    <div className='flex items-center'>
      <label className='sr-only' htmlFor='filenameInput'>
        File Name
      </label>
      <input
        id='filenameInput'
        type='text'
        value={fileName}
        onChange={onFileNameChange}
        className='p-2 border border-gray-300 hover:border-gray-400 focus:border-blue-500 rounded-md m-1 bg-white dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:focus:border-blue-700'
        placeholder='File Name (JSONL)'
      />
      <Button
        onClick={handleUpload}
        className={getUploadButtonClasses(isUploadDisabled)}
        disabled={isUploadDisabled}
      >
        <div className='flex items-center'>
          <span className='material-symbols'>cloud_upload</span>
          <span className='ml-1'>Upload</span>
        </div>
      </Button>
      <Button
        onClick={downloadAsJsonl}
        className='ml-1 text-yellow-500 hover:text-yellow-600 active:text-yellow-700 dark:text-yellow-700 dark:hover:text-yellow-600 dark:active:text-yellow-700
        border border-yellow-500 dark:border-yellow-700 hover:border-yellow-600 active:border-yellow-700 dark:hover:border-yellow-600 dark:active:border-yellow-700'
      >
        <div className='flex items-center'>
          <span className='material-symbols'>download</span>
          <span className='ml-1'>Download</span>
        </div>
      </Button>
      <Button
        onClick={copyToClipboardAsJsonl}
        className='ml-1 text-yellow-500 hover:text-yellow-600 active:text-yellow-700 dark:text-yellow-700 dark:hover:text-yellow-600 dark:active:text-yellow-700
        border border-yellow-500 dark:border-yellow-700 hover:border-yellow-600 active:border-yellow-700 dark:hover:border-yellow-600 dark:active:border-yellow-700'
      >
        <div className='flex items-center'>
          <span className='material-symbols'>content_copy</span>
          <span className='ml-1'>Copy to Clipboard</span>
        </div>
      </Button>
    </div>
    <div className='flex'>
      <div className='p-2 ml-4 rounded-lg flex-shrink-0 border-2 text-gray-500 dark:text-gray-300 border-gray-400 dark:border-gray-700'>
        <span className='text-xl font-medium'>
          {tokenCount} token{tokenCount !== 1 ? 's' : ''}
        </span>
      </div>
      <div
        title={
          examplesLength < 10 ? 'A minimum of 10 examples is required.' : ''
        }
        className={`border-2 p-2 ml-4 rounded-lg flex-shrink-0 ${
          examplesLength < 10
            ? 'text-red-500 border-red-400 dark:border-red-700'
            : 'text-gray-500 dark:text-gray-300 border-gray-400 dark:border-gray-700'
        }`}
      >
        <span className='text-xl font-medium'>
          {examplesLength} example{examplesLength !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  </header>
);

export default Header;
