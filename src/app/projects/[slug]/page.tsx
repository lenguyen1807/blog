import { GetProjectByName } from "@/lib/api"
import { notFound } from "next/navigation";
import BlogFooter from "@/components/blog/footer";
import BlogContent from "@/components/blog/content";

type Props = {
    params: { slug: string };
}

export default async function Page({params} : Props) {
    const project = await GetProjectByName(params.slug);

    if (!project) {
        return notFound();
    }

    return (
        <div className="w-full">
            <div className="py-14 gap-x-20 lg:flex lg:items-start"> 
                <BlogContent content={project.body} />
            </div>
            <BlogFooter />
        </div>
    )
}