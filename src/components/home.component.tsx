'use client';

import RoundedRect from '@/atoms/rounded.rect';
import SearchComponent from './search.component';
import CardLineChart from '@/atoms/chart';

export default function HomeComponent() {
  const metrics = [
    {
      name: 'Users',
      value: '100K',
      bgColor: 'bg-[#FFF3C8]',
      number: '10',
    },
    {
      name: 'Parties',
      value: '50K',
      bgColor: 'bg-[#FFD2B2]',
      number: '10.53',
    },
    {
      name: 'Venues',
      value: '2K',
      bgColor: 'bg-[#F8EBFC]',
      number: '9.4',
    },
  ];
  return (
    <div className='mt-5 w-[55%]'>
      <SearchComponent />
      <div className='mt-10 flex w-full flex-wrap gap-8 px-4'>
        {metrics.map((metric) => {
          return (
            <div key={metric.name} className='w-[30%]'>
              <RoundedRect
                bgColor={metric.bgColor}
                number={metric.number}
                title={metric.name}
                value={metric.value}
              />
            </div>
          );
        })}
      </div>
      <CardLineChart/>
    </div>
  );
}
