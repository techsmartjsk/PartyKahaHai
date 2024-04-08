'use client';

import Button from '@/atoms/button';
import Input from '@/atoms/input';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginComponent() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API = process.env.NEXT_PUBLIC_API_URL;
  const submit = async () => {
    try {
      const response = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem('access-token', response.data['accessToken']);
        localStorage.setItem('refresh-token', response.data['refreshToken']);
      }

      return router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex h-screen items-center justify-center bg-[#AD00DF] bg-opacity-[8%]'>
      <div className='flex h-[400px] w-[500px] flex-col items-center justify-center gap-6 rounded-md bg-white px-10 py-10'>
        <Image
          src='/images/admin-logo.svg'
          width={128}
          height={32}
          alt='Logo: Admin'
        />
        <div className='mt-2 flex w-full flex-col gap-6'>
          <h3 className='text-center text-2xl font-bold'>Login</h3>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder='Email'
            type='email'
          />
          <Input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder='Password'
            type='password'
          />
          <Button title='Login' onClick={submit}></Button>
        </div>
      </div>
    </div>
  );
}
