'use client';

import PlusIcon from '@/icons/plus.icon';
import React from 'react';

interface ActionButtonProps {
  title: string;
  onClick: () => void;
}

export default function ActionButton({ title, onClick }: ActionButtonProps) {
  return (
    <button
      className='flex w-full items-center justify-center rounded-md bg-[#EFBE10] px-4 py-2 text-lg text-white'
      onClick={onClick}
    >
      <PlusIcon /> {title}
    </button>
  );
}
