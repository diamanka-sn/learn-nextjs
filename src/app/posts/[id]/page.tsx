const fetchPost = async (postId:string)=>{
    const post = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: 'GET'
    })
    return post.json()
}

export async function generateMetadata({params}:any){
    const {post} = await fetchPost(params.id)
    return {
        title: post.title,
        description: post.description,
        openGraph:{}
        
    }

}

export default function PostID({params}:any){
    return <main>Post {params.id}</main>
}