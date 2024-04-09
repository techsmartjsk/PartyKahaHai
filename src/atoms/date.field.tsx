import CalendarIcon from '@/icons/calendar.icon';
import { useState } from 'react';

interface DateFieldProps {
  date: Date | undefined;
  setDate: (date: Date) => void;
}

export default function DateField({ date, setDate }: DateFieldProps) {
  const [value, setValue] = useState(date?.toISOString().split('T')[0]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate);
    setValue(selectedDate.toISOString().split('T')[0]);
  };

  return (
    <div className='flex w-fit cursor-pointer items-center gap-2 rounded-md border-[1px] border-gray-100 px-6 py-2'>
      <input
        type='date'
        className='w-[180px]'
        placeholder='Search'
        value={value}
        onChange={handleDateChange}
      />
      <CalendarIcon />
    </div>
  );
}
