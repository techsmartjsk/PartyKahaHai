'use client';

import React from 'react';
import TrendupIcon from '@/icons/trendUp.icon';

interface RoundedRectProps {
  bgColor: string;
  title: string;
  number: string;
  value: string;
}

export default function RoundedRect({
  bgColor,
  title,
  number,
  value,
}: RoundedRectProps) {
  return (
    <div className={`h-[150px] w-full rounded-[20px] ${bgColor} p-6`}>
      <h4 className='text-xl'>{title}</h4>
      <div className='bottom-0 mt-5 flex items-center gap-2'>
        <p className='w-[50%] text-4xl'>{value}</p>
        <p className='text-xl'>+{number}%</p>
        <TrendupIcon />
      </div>
    </div>
  );
}
