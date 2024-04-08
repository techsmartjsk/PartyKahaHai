"use client";

import RoundedRect from "@/atoms/rounded.rect";
import SearchComponent from "./search.component";

export default function HomeComponent() {
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
    }
  ];
  return (
    <div className="w-[55%] mt-5">
      <SearchComponent/>
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
