import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'Admin Dashboard: Party Kaha Hai?',
  description: 'Admin Dashboard for Party kaha hai?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
