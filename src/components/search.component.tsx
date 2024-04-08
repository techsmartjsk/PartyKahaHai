"use client"

import SearchInput from "@/atoms/search.input"
import ProfileIcon from "@/icons/profile.icon"
import { useState } from "react";

export default function SearchComponent(){
    const [search, setSearch] = useState("");
    return(
        <div className="py-4 border-b-[1px] border-gray-100 px-6 justify-between items-center flex">
            <SearchInput value={search} setValue={setSearch} />
            <ProfileIcon/>
        </div>
    )
}