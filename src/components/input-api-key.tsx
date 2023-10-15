'use client';
// UseClient.tsx

import React, { useState, useEffect } from 'react';
import { saveApiKey, getApiKey } from '@/utils/api';

const InputApiKey: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedApiKey = getApiKey();
    if (savedApiKey) {
      setInputValue(savedApiKey);
    }
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (): void => {
    saveApiKey(inputValue); // Save the API key when the button is clicked
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        className='w-full p-2 border border-gray-300 rounded mb-4' // Added margin-bottom for spacing
        placeholder='Enter your openAI API key'
      />
      <button
        onClick={handleSubmit}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
      >
        Submit
      </button>
    </div>
  );
};

export default InputApiKey;
