import { GetPosts } from "@/lib/api"
import { PostsPath } from "@/lib/const"

export default async function Page() {
    const posts = await GetPosts(PostsPath);
    console.log(posts);
    
    return (
        <>
            This is blog page
        </>
    )
}