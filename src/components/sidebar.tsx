"use client"

import DashboardIcon from "@/icons/dashboard.icon";
import LogoutIcon from "@/icons/logout.icon";
import PartyIcon from "@/icons/party.icon";
import ReportIcon from "@/icons/report.icon";
import RestaurantIcon from "@/icons/restaurant.icon";
import UserIcon from "@/icons/user.icon";
import VenueIcon from "@/icons/venue.icon";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const pages = [
    {
      link: "/",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      link: "/parties",
      name: "Manage Parties",
      icon: <PartyIcon />,
    },
    {
      link: "/venues/",
      name: "Manage Venues",
      icon: <VenueIcon />,
    },
    {
      link: "/users/",
      name: "Manage Users",
      icon: <UserIcon />,
    },
    {
      link: "/requests/",
      name: "Manage RM Requests",
      icon: <RestaurantIcon />,
    },
    {
      link: "/reports/",
      name: "Manage Reports",
      icon: <ReportIcon />,
    },
  ];
  return (
    <div className="w-[20%] relative p-8 min-h-screen border-r-[1px] border-gray-100">
      <Image
        src="/images/admin-logo.svg"
        width={128}
        height={32}
        alt="Logo: Admin"
      />
      <div className="flex flex-col gap-5 mt-10">
        {pages.map((page) => {
          return (
            <a
            href={page.link}
              className={`flex gap-2 cursor-pointer items-center p-2 hover:bg-[#AD00DF] hover:text-[#AD00DF] hover:bg-opacity-[8%] rounded-md ${pathname === page.link ? 'text-[#AD00DF] bg-opacity-[8%] bg-[#AD00DF]':''}`}
              key={page.name}
            >
              {page.icon}
              <p className="text-lg">{page.name}</p>
            </a>
          );
        })}
      </div>
      <div className="absolute bottom-16">
        <div
          className="flex gap-2 hover:text-[#AD00DF] cursor-pointer items-center p-2 hover:bg-[#AD00DF] hover:bg-opacity-[8%] rounded-md"
          key="Logout"
        >
          <LogoutIcon />
          <p className="text-lg">Logout</p>
        </div>
      </div>
    </div>
  );
}
