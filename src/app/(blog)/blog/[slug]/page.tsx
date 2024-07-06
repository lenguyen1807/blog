import BlogContent from "@/components/blog/content";
import { GetArticleByName } from "@/lib/api";
import { notFound } from 'next/navigation';
import BlogHeader from "@/components/blog/header";
import BlogFooter from "@/components/blog/footer";
import { Lora } from "next/font/google";
import "@/styles/latex.css"
import "@/styles/pretty-code.css"
import Toc from "@/components/blog/toc";
import { cn } from "@/lib/utils";

type Props = {
    params: { slug: string };
};

const lora = Lora({
    subsets: ["latin", "vietnamese"],
});

export default async function Page({params} : Props) {
    const article = await GetArticleByName(params.slug);

    if (!article) {
        return notFound();
    }

    return (
        <div 
            className={cn(lora.className)}
        >
            <BlogHeader 
                article={article} 
            />
            <div className="space-y-12 pt-8">
                <Toc 
                    tocs={article.toc} 
                />
                <BlogContent 
                    content={article.body} 
                />
            </div>
            <BlogFooter />
        </div>
    )
}