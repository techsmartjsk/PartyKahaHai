"use client";

import React from 'react';
import TrendupIcon from '@/icons/trendUp.icon';

interface RoundedRectProps {
  bgColor: string;
  title: string;
  number: string;
  value: string;
}

export default function RoundedRect({ bgColor, title, number, value }: RoundedRectProps) {
  return (
    <div className={`rounded-[20px] h-[150px] w-full ${bgColor} p-6`}>
      <h4 className="text-xl">{title}</h4>
      <div className="mt-5 bottom-0 items-center flex gap-2">
        <p className="text-4xl w-[50%]">{value}</p>
        <p className="text-xl">+{number}%</p>
        <TrendupIcon />
      </div>
    </div>
  );
}

