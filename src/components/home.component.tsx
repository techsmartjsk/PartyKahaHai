"use client";

import RoundedRect from "@/atoms/rounded.rect";
import SearchInput from "@/atoms/search.input";
import ProfileIcon from "@/icons/profile.icon";
import { useState } from "react";

export default function HomeComponent() {
  const [search, setSearch] = useState("");
  const metrics = [
    {
      name: "Users",
      value: "100K",
      bgColor: "bg-[#FFF3C8]",
      number: "10",
    },
    {
      name: "Parties",
      value: "50K",
      bgColor: "bg-[#FFD2B2]",
      number: "10.53",
    },
    {
      name: "Venues",
      value: "2K",
      bgColor: "bg-[#F8EBFC]",
      number: "9.4",
    },
    {
      name: "Venues",
      value: "2K",
      bgColor: "bg-[#F8EBFC]",
      number: "9.4",
    },
    {
      name: "Venues",
      value: "2K",
      bgColor: "bg-[#F8EBFC]",
      number: "9.4",
    },
    {
      name: "Venues",
      value: "2K",
      bgColor: "bg-[#F8EBFC]",
      number: "9.4",
    },
  ];
  return (
    <div className="w-[55%] mt-5">
      <div className="py-4 border-b-[1px] border-gray-100 px-6 justify-between items-center flex">
        <SearchInput value={search} setValue={setSearch} />
        <ProfileIcon/>
      </div>
      <div className="flex flex-wrap mt-10 gap-8 px-4 w-full">
        {metrics.map((metric) => {
          return (
            <div key={metric.name} className="w-[30%]">
              <RoundedRect
                bgColor={metric.bgColor}
                number={metric.number}
                title={metric.name}
                value={metric.value}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
