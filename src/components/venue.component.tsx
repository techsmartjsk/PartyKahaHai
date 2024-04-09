'use client';

import { useState } from 'react';
import SearchComponent from './search.component';
import SearchInput from '@/atoms/search.input';
import CustomSelect from '@/atoms/select';
import DateField from '@/atoms/date.field';
import VenueCard from '@/atoms/venue.card';
import { title } from 'process';
import ActionButton from '@/atoms/action.button';

export default function VenueComponent() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>('');
  const [date, setDate] = useState<Date>();
  const venues = [
    {
      id: 1,
      title: 'Venue 1',
      image: '/images/venue.png',
      ratings: '4.5',
      type: 'Outdoor',
      budget: '$$$',
      offers: 'Free drinks',
      cuisines: ['Italian', 'Mexican'],
    },
    {
      id: 2,
      title: 'Venue 2',
      image: '/images/venue.png',
      ratings: '4.2',
      type: 'Indoor',
      budget: '$$',
      offers: '10% off',
      cuisines: ['Chinese', 'Indian'],
    },
    {
      id: 3,
      title: 'Venue 3',
      image: '/images/venue.png',
      ratings: '4.0',
      type: 'Outdoor',
      budget: '$',
      offers: 'Free parking',
      cuisines: ['American', 'Mediterranean'],
    },
    {
      id: 4,
      title: 'Venue 4',
      image: '/images/venue.png',
      ratings: '4.8',
      type: 'Indoor',
      budget: '$$$',
      offers: 'Live music',
      cuisines: ['Japanese', 'Thai'],
    },
    {
      id: 5,
      title: 'Venue 5',
      image: '/venue5.jpg',
      ratings: '4.7',
      type: 'Outdoor',
      budget: '$$',
      offers: 'Free dessert',
      cuisines: ['French', 'Spanish'],
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
      <div className='mx-5 mt-5 flex justify-between gap-5'>
        <SearchInput value={search} setValue={setSearch} />
        <CustomSelect
          options={options}
          placeholder='Category'
          value={category}
          setValue={setCategory}
        />
        <ActionButton title='Add Venue' onClick={() => {}} />
      </div>
      <div className='mt-5 flex'>
        <div className='flex w-[50%] flex-col gap-5'>
          {venues.map((venue, index) => {
            return (
              <VenueCard
                key={index}
                title={venue.title}
                image={venue.image}
                ratings={venue.ratings}
                cuisines={venue.cuisines}
                budget={venue.budget}
                offers={venue.offers}
                type={venue.type}
              />
            );
          })}
        </div>
        <div className='w-[50%] bg-gray-100'></div>
      </div>
    </div>
  );
}
