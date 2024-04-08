'use client';

import SearchInput from '@/atoms/search.input';
import ProfileIcon from '@/icons/profile.icon';
import { useState } from 'react';

export default function SearchComponent() {
  const [search, setSearch] = useState('');
  return (
    <div className='flex items-center justify-between border-b-[1px] border-gray-100 px-6 py-4'>
      <SearchInput value={search} setValue={setSearch} />
      <ProfileIcon />
    </div>
  );
}
