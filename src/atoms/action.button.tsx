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
      className='w-full flex items-center text-white justify-center rounded-md bg-[#EFBE10] px-4 py-2 text-lg'
      onClick={onClick}
    >
      <PlusIcon/> {' '}
      {title}
    </button>
  );
}
