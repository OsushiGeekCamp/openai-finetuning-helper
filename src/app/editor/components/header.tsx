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
    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
    : 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600 dark:active:bg-orange-700';

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
        Upload
      </Button>
      <Button
        onClick={downloadAsJsonl}
        className='ml-1 bg-green-500 text-white hover:bg-green-600 active:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 dark:active:bg-green-700'
      >
        Download
      </Button>
      <Button
        onClick={copyToClipboardAsJsonl}
        className='ml-1 bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:active:bg-yellow-700'
      >
        Copy to Clipboard
      </Button>
    </div>
    <div className='flex'>
      <div className='bg-gray-200 dark:bg-gray-700 p-2 ml-4 rounded-lg flex-shrink-0'>
        <span className='text-xl font-medium'>
          {tokenCount} token{tokenCount !== 1 ? 's' : ''}
        </span>
      </div>
      <div
        title={
          examplesLength < 10 ? 'A minimum of 10 examples is required.' : ''
        }
        className={`bg-gray-200 dark:bg-gray-700 p-2 ml-4 rounded-lg flex-shrink-0 ${
          length < 10 ? 'text-red-500' : ''
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
