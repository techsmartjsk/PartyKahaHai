import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: boolean = false
const API = process.env.BACKEND_URL

export async function  middleware(request: NextRequest){
    // let accessToken = request.cookies.get('access-token')
    // let refreshToken = request.cookies.get('refresh-token')

    // let checkToken = await fetch(`${API}/auth/verifyToken`,{
    //     headers:{
    //         'Authorization':`Bearer ${accessToken}`
    //     }
    // })

    // console.log(checkToken.json())

    if(isLoggedIn){
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    matcher:['/parties','/venues']
}