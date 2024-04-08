import React from 'react';
import SearchIcon from '@/icons/search.icon';

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

export default function SearchInput({ value, setValue }: SearchInputProps) {
  return (
    <div className="rounded-md px-6 py-2 w-fit cursor-pointer flex gap-2 items-center border-[1px] border-gray-100">
      <input
        type="text"
        className="w-[250px]"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}

