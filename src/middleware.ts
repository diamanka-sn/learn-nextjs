import {  NextResponse } from "next/server";
import type {NextRequest} from "next/server"
const  isLoggdIn:boolean = false

export function middleware(req:NextRequest) {
//     if(!isLoggdIn && req.url==="http://localhost:3000/profile"){
//     }
//   return NextResponse.next();
// let headers = new Headers(req.headers)
// let cookie = req.cookies.get('my-cookie')
if(isLoggdIn){
    return NextResponse.next();
}
return NextResponse.redirect(new URL("/", req.url))

}


export const config = {
    matcher:['/profile']
}