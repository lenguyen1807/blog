import { GetProjectByName } from "@/lib/api"
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Undo2 } from "lucide-react";
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
        <div className="w-full space-y-10">
            <Button variant="outline" className="h-8 w-20">
                <Link href="/projects" className="flex">
                    <Undo2 className="h-5 w-5 mr-2" />
                    Back
                </Link>
            </Button>
            <BlogContent 
                content={project.body} 
                className="pt-6 max-w-none prose-a:no-underline hover:prose-a:underline" 
            />
            <BlogFooter />
        </div>
    )
}