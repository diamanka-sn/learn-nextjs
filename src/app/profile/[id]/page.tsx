"use client"
import { useParams, useRouter } from "next/navigation"

export default function ProfileId(){

    const params = useParams()
    const router = useRouter()
    console.log(params.id)
    return <div>
        Profile : {params.id}
        <div onClick={()=>router.back()}>Retour page precedente</div>
    </div>
}