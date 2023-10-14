import React from 'react';

type ToggleSwitchProps = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label }) => {
  return (
    <div className="mb-4 flex items-center">
      <label
        htmlFor='toggle-switch'
        className='flex items-center cursor-pointer'
      >
        <div className='relative'>
          <input
            id='toggle-switch'
            type='checkbox'
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className='sr-only'
          />
          <div
            className={`block w-10 h-6 rounded-full ${checked ? 'bg-green-500' : 'bg-gray-400'
              }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${checked ? 'transform translate-x-full' : ''
              }`}
          ></div>
        </div>
        <span className='ml-3 text-gray-700'>
          {label}
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
