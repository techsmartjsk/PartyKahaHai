'use client';

import { useState } from 'react';
import SearchComponent from './search.component';
import SearchInput from '@/atoms/search.input';
import CustomSelect from '@/atoms/select';
import DateField from '@/atoms/date.field';
import ActionButton from '@/atoms/action.button';
import UserCard from '@/atoms/user.card';

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

  const users = [
    { id: 1, name: 'John Doe', image: '/images/user1.jpg' },
    { id: 2, name: 'Jane Smith', image: '/images/user2.jpg' },
    { id: 3, name: 'Alice Johnson', image: '/images/user3.jpg' },
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
        <ActionButton title='Create Admin User' onClick={() => {}} />
      </div>
      <div className='mx-5 mt-5 flex h-screen gap-5'>
        <div className='w-[50%]'>
          <div className='flex bg-gray-100 px-4 py-2'>
            <p className='w-[50%] text-center font-bold'>App Users</p>
            <p className='w-[50%] text-center font-bold'>Admin Users</p>
          </div>
          <div className='mt-5 flex flex-col gap-5'>
            {users.map((user) => {
              return (
                <UserCard key={user.id} name={user.name} image={user.image} />
              );
            })}
          </div>
        </div>
        <div className='flex w-[50%] bg-gray-100'></div>
      </div>
    </div>
  );
}
