import data from '@/data.json'
import { NextResponse } from 'next/server'
export async function GET(req:Request, context:any){
    const  {params} = context

    const user = data.filter(x=>params.userId ===x.id.toString())

    return NextResponse.json(user)

}