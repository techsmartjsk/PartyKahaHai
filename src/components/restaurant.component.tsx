'use client';

import SearchInput from '@/atoms/search.input';
import SearchComponent from './search.component';
import { useState } from 'react';
import Table from '@/atoms/table';

export default function RestaurantComponent() {
  const [search, setSearch] = useState('');
  const headers = [
    {
      name: 'requestId',
      label: 'RM Request ID',
    },
    {
      name: 'requestedBy',
      label: 'Requested By',
    },
    {
      name: 'dateTime',
      label: 'Date Time',
    },
    {
      name: 'venue',
      label: 'Venue',
    },
    {
      name: 'actions',
      label: 'Actions',
    },
  ];

  const rows = [
    {
      id: '1',
      requestId: 'RM001',
      requestedBy: 'John Doe',
      dateTime: '2024-04-15 14:30',
      venue: 'Venue 1',
    },
    {
      id: '2',
      requestId: 'RM002',
      requestedBy: 'Jane Smith',
      dateTime: '2024-04-16 10:00',
      venue: 'Venue 2',
    },
    {
      id: '3',
      requestId: 'RM003',
      requestedBy: 'Alice Johnson',
      dateTime: '2024-04-17 16:45',
      venue: 'Venue 3',
    },
  ];
  return (
    <div className='mt-5 w-[55%]'>
      <SearchComponent />
      <div className='mx-5 mt-5'>
        <SearchInput value={search} setValue={setSearch} />
      </div>
      <div className='mx-5 mt-5'>
        <Table headers={headers} data={rows} />
      </div>
    </div>
  );
}
