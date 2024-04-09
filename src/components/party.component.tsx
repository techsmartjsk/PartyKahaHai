'use client';

import SearchComponent from './search.component';
import { useState } from 'react';
import SearchInput from '@/atoms/search.input';
import CustomSelect from '@/atoms/select';
import DateField from '@/atoms/date.field';
import PartyCard from '@/atoms/party.card';
import party from '../../public/images/party.png';

export default function PartyComponent() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>('');
  const [date, setDate] = useState<Date>();
  const parties = [
    {
      title: 'Party A',
      attendees: 20,
      time: '4:00',
      image: party,
    },
    {
      title: 'Party B',
      attendees: 20,
      time: '4:00',
      image: party,
    },
    {
      title: 'Party C',
      attendees: 20,
      time: '4:00',
      image: party,
    },
    {
      title: 'Party D',
      attendees: 20,
      time: '4:00',
      image: party,
    },
  ];
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
  return (
    <div className='mt-5 w-[55%]'>
      <SearchComponent />
      <div className='mx-5 mt-5'>
        <div className='flex justify-between'>
          <SearchInput value={search} setValue={setSearch} />
          <CustomSelect
            options={options}
            placeholder='Category'
            value={category}
            setValue={setCategory}
          />
          <DateField date={date} setDate={setDate} />
        </div>
      </div>
      <div className='mt-10 flex'>
        <div className='flex w-[50%] flex-col gap-5'>
          {parties.map((party) => {
            return (
              <PartyCard
                title={party.title}
                attendees={party.attendees}
                time={party.time}
                image={party.image}
              />
            );
          })}
        </div>
        <div className='w-[50%]  bg-gray-100'></div>
      </div>
    </div>
  );
}
