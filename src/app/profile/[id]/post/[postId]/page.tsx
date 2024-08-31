"use client"
import { useParams } from "next/navigation"

export default function PostId(){
    const params = useParams()

    console.log(params.postId)
    return <div>My profile</div>
}