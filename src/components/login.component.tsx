"use client"

import Button from "@/atoms/button";
import Input from "@/atoms/input";
import Image from "next/image";

export default function LoginComponent(){
    const submit = () => {
        console.log("Submitted!")
    }
    return(
        <div className="bg-[#AD00DF] bg-opacity-[8%] h-screen flex items-center justify-center">
            <div className="w-[500px] rounded-md bg-white h-[400px] py-10 px-10 flex flex-col gap-6 items-center justify-center">
                <Image
                    src="/images/admin-logo.svg"
                    width={128}
                    height={32}
                    alt="Logo: Admin"
                />
                <div className="mt-2 flex gap-6 flex-col w-full">
                    <h3 className="text-center text-2xl font-bold">Login</h3>
                    <Input placeholder="Email" type="email"/>
                    <Input placeholder="Password" type="password"/>
                    <Button title="Login" onClick={submit}></Button>
                </div>
            </div>
        </div>
    )
}