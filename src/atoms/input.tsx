import React, { ChangeEvent } from 'react';

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type = 'text', placeholder, value, onChange }: InputProps) {
    return (
        <div className="rounded-md p-2 w-full border-[1px] border-gray-100">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='w-full'
            />
        </div>
    );
}
