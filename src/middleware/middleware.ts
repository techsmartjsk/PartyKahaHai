'use client';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useEffect } from 'react';

let isLoggedIn: boolean = false;
const API = process.env.BACKEND_URL;

export async function Middleware(request: NextRequest) {
  useEffect(() => {
    if (typeof window !== undefined && window.localStorage) {
      let accessToken = localStorage.getItem('access-token');
      let refreshToken = localStorage.getItem('refresh-token');

      if (accessToken) {
        try {
          isLoggedIn = true;
        } catch (error) {
          isLoggedIn = false;
        }
      }
    }
  }, []);

  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/', '/parties', '/venues'],
};
