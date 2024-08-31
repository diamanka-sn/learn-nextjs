import { NextResponse } from "next/server"

const posts:any = [
    {
        "id": 1,
        "title": "Post 1",
        "description":"this is a description"
    }
]

export async function GET(req:Request, context:any){
    const {params} = context
    return NextResponse.json({
        post:posts.find((x:any)=>x.id.toString()===params.id)
    })
}