'use client';

import SearchInput from '@/atoms/search.input';
import SearchComponent from './search.component';
import { useState } from 'react';
import Table from '@/atoms/table';

export default function ReportComponent() {
  const [search, setSearch] = useState('');
  const headers = [
    {
      name: 'requestId',
      label: 'Report ID',
    },
    {
      name: 'reportedBy',
      label: 'Reported By',
    },
    {
      name: 'reportedUser',
      label: 'Reported User',
    },
    {
      name: 'reportedReason',
      label: 'Reported Reason',
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
      reportedBy: 'John Doe',
      reportedUser: 'Reported User',
      reportedReason: 'Reported',
      actions: 'View/Edit/Delete',
    },
    {
      id: '2',
      requestId: 'RM002',
      reportedBy: 'Jane Smith',
      reportedUser: 'Reported User',
      reportedReason: 'Venue 2',
      actions: 'View/Edit/Delete',
    },
    {
      id: '3',
      requestId: 'RM003',
      reportedBy: 'Alice Johnson',
      reportedUser: 'Reported User',
      reportedReason: 'Reported',
      actions: 'View/Edit/Delete',
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
