'use client';

import DashboardIcon from '@/icons/dashboard.icon';
import LogoutIcon from '@/icons/logout.icon';
import PartyIcon from '@/icons/party.icon';
import ReportIcon from '@/icons/report.icon';
import RestaurantIcon from '@/icons/restaurant.icon';
import UserIcon from '@/icons/user.icon';
import VenueIcon from '@/icons/venue.icon';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const pages = [
    {
      link: '/',
      name: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      link: '/parties',
      name: 'Manage Parties',
      icon: <PartyIcon />,
    },
    {
      link: '/venues',
      name: 'Manage Venues',
      icon: <VenueIcon />,
    },
    {
      link: '/users',
      name: 'Manage Users',
      icon: <UserIcon />,
    },
    {
      link: '/restaurants',
      name: 'Manage RM Requests',
      icon: <RestaurantIcon />,
    },
    {
      link: '/reports',
      name: 'Manage Reports',
      icon: <ReportIcon />,
    },
  ];
  return (
    <div className='relative min-h-screen w-[20%] border-r-[1px] border-gray-100 p-8'>
      <Image
        src='/images/admin-logo.svg'
        width={128}
        height={32}
        alt='Logo: Admin'
      />
      <div className='mt-10 flex flex-col gap-5'>
        {pages.map((page) => {
          return (
            <a
              href={page.link}
              className={`flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-[#AD00DF] hover:bg-opacity-[8%] hover:text-[#AD00DF] ${pathname === page.link ? 'bg-[#AD00DF] bg-opacity-[8%] text-[#AD00DF]' : ''}`}
              key={page.name}
            >
              {page.icon}
              <p className='text-lg'>{page.name}</p>
            </a>
          );
        })}
      </div>
      <div className='absolute bottom-16'>
        <div
          className='flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-[#AD00DF] hover:bg-opacity-[8%] hover:text-[#AD00DF]'
          key='Logout'
        >
          <LogoutIcon />
          <p className='text-lg'>Logout</p>
        </div>
      </div>
    </div>
  );
}
