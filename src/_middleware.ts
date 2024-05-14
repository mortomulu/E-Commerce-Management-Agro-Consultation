import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import stateAuth from "./lib/auth/stateAuth";

export function middleware(request : NextRequest){
    // const isLogin =  stateAuth()
    const isLogin = true
    if (!isLogin) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: ["/admin/:path*"]
}