import BlogContent from "@/components/blog/content";
import { GetAllArticles, GetArticleByName } from "@/lib/api";
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

export async function generateStaticParams() {
    const articles = await GetAllArticles();

    return articles.map((article) => ({
        slug: article.name
    }))
}

export default async function Page({params} : Props) {
    const article = await GetArticleByName(params.slug);

    if (!article) {
        return notFound();
    }

    return (
        <div className={cn()}>
            <BlogHeader article={article} />
            <div className="pt-14 xl:gap-x-20 xl:flex xl:items-start">
                <aside className="xl:sticky xl:top-20 xl:order-2 pb-16 xl:-me-60 xl:basis-60">
                    <Toc tocs={article.toc} />
                </aside>
                <BlogContent 
                    content={article.body} 
                    className="max-w-none prose-a:no-underline hover:prose-a:underline prose-teal dark:prose-green" 
                />
            </div>
            <BlogFooter />
        </div>
    )
}