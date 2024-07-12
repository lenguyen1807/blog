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
        <div className={cn(lora.className)}>
            <BlogHeader article={article} />
            <div className="mt-8 gap-x-20 lg:flex lg:items-start">
                <aside className="xl:sticky top-20 order-2 -me-48 hidden basis-60 lg:flex lg:flex-col">
                    <Toc tocs={article.toc} />
                </aside>
                <BlogContent content={article.body} />
            </div>
            <BlogFooter />
        </div>
    )
}