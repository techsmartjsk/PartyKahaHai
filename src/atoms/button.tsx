"use client"

import React from 'react';

interface ButtonProps {
    title: string;
    onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
    return (
        <button className='py-2 px-4 bg-[#AD00DF] bg-opacity-[8%] text-xl w-full rounded-md' onClick={onClick}>{title}</button>
    );
}
