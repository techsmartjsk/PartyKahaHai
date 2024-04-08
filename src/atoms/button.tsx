'use client';

import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className='w-full rounded-md bg-[#AD00DF] bg-opacity-[8%] px-4 py-2 text-xl'
      onClick={onClick}
    >
      {title}
    </button>
  );
}
