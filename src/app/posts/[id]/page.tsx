"use client"

import { useSearchParams } from "next/navigation"
export default function PostID({params, searchParams}:any){
    // const searchParams = useSearchParams() 
    // const name = searchParams.get('name')
    // console.log(name)
    return <main>Post {params.id} - name {searchParams.name}</main>
}