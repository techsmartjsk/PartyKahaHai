import ArrowIcon from '@/icons/arrow.icon';
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string | null;
  setValue: (value: string | null) => void;
  placeholder?: string;
}

export default function CustomSelect({
  options,
  value,
  setValue,
  placeholder,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block text-left'>
      <div
        className='flex items-center justify-between rounded-md border-[1px] border-gray-100 px-4
          py-3'
      >
        <span
          className={`text-md inline-block w-[180px] cursor-pointer bg-white font-medium leading-5 ${value ? 'text-gray-700' : 'text-gray-500'} 
          ${value ? 'focus:shadow-outline-blue hover:bg-gray-50 focus:border-blue-300 focus:outline-none active:bg-gray-100 active:text-gray-700' : ''} 
          transition duration-150 ease-in-out`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
        </span>
        {!isOpen ? (
          <ArrowIcon />
        ) : (
          <div className='rotate-180 transform transition duration-150 ease-in-out'>
            <ArrowIcon />
          </div>
        )}
      </div>
      {isOpen && (
        <div className='absolute mt-2 w-full rounded-md bg-white shadow-lg'>
          {options.map((option) => (
            <div
              key={option.value}
              className='cursor-pointer px-4 py-2 text-sm leading-5 text-gray-900 hover:bg-gray-100 hover:text-gray-900'
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
