import React, { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className='w-full rounded-md border-[1px] border-gray-100 p-2'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full'
      />
    </div>
  );
}
