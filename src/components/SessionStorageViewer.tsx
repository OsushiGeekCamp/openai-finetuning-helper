// src/components/SessionStorageViewer.tsx

import React, { useState, useEffect } from 'react';

const SessionStorageViewer: React.FC = () => {
  const [sessionStorageContent, setSessionStorageContent] = useState<
    Array<[string, string]>
  >([]);

  const updateSessionStorageContent = (): void => {
    const content: Array<[string, string]> = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const value = key ? sessionStorage.getItem(key) : null;
      if (key && value !== null) {
        content.push([key, value]);
      }
    }
    setSessionStorageContent(content);
  };

  useEffect(() => {
    updateSessionStorageContent();
  }, []);

  return (
    <div className='bg-white p-4 rounded shadow w-full text-left'>
      <button
        onClick={updateSessionStorageContent}
        className='bg-blue-500 text-white px-4 py-2 rounded mb-4'
      >
        Refresh
      </button>
      <ul>
        {sessionStorageContent.map((item, index) => (
          <li key={index}>
            {item[0]}: {item[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionStorageViewer;
