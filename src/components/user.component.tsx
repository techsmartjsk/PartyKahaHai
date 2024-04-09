'use client';

import { useState } from 'react';
import SearchComponent from './search.component';
import SearchInput from '@/atoms/search.input';
import CustomSelect from '@/atoms/select';
import DateField from '@/atoms/date.field';
import ActionButton from '@/atoms/action.button';

export default function UsersComponent() {
  const [search, setSearch] = useState('');
  const options = [
    {
      value: 'ABC',
      label: 'ABC',
    },
    {
      value: 'DEF',
      label: 'DEF',
    },
  ];
  const [category, setCategory] = useState<string | null>('');
  return (
    <div className='mt-5 w-[55%]'>
      <SearchComponent />
      <div className='mx-5 mt-5 flex justify-between gap-5'>
        <SearchInput value={search} setValue={setSearch} />
        <CustomSelect
          options={options}
          placeholder='Category'
          value={category}
          setValue={setCategory}
        />
        <ActionButton title='Add User' onClick={() => {}} />
      </div>
      <div className='mt-5'></div>
    </div>
  );
}
