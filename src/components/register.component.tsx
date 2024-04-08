"use client"

import Button from "@/atoms/button";
import Input from "@/atoms/input";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL


export default function RegisterComponent(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    const submit = async () => {
        if(email == ""){
            return
        } else if(password == ""){
            return
        } else{
            const role = "ADMIN"
            const response = await fetch(`${API}/auth/register/`,{
                method: 'POST',
                body:JSON.stringify({ email, password, role }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
 
            if(response.ok){
               redirect("/")
            }
        }
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
                    <h3 className="text-center text-2xl font-bold">Register</h3>
                    <Input value={email} onChange={(event)=>{
                        setEmail(event.target.value)
                    }} placeholder="Email" type="email"/>
                    <Input value={password}
                    onChange={(event)=>{
                        setPassword(event.target.value)
                    }}  placeholder="Password" type="password"/>
                    <Button title="Register" onClick={submit}></Button>
                </div>
            </div>
        </div>
    )
}