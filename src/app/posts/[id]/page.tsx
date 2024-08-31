"use client";
import { useEffect, useState } from "react"

type Post = {
    title?: string
    description?: string
}
export default function PostID({ params }: any) {
    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(false)
    const getPostById = async () => {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:3000/api/posts/${params.id}`, {
                method: 'GET',
                next:{
                    revalidate: 5000
                }
            })
            debugger
            if (response) {
                const { post } = await response.json()
                if (post) setPost(post)
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        getPostById()
    }, [])
    return <main>
        {loading && <div>loading</div>}
        {!loading && <div>
            {post && <h1>{post.title}</h1>}
            {post && <span>{post.description}</span>}
        </div>}
    </main>
}