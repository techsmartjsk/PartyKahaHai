import React from 'react';
import SearchIcon from '@/icons/search.icon';

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

export default function SearchInput({ value, setValue }: SearchInputProps) {
  return (
    <div className='flex w-fit cursor-pointer items-center gap-2 rounded-md border-[1px] border-gray-100 px-6 py-2'>
      <input
        type='text'
        className='w-[180px]'
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}
