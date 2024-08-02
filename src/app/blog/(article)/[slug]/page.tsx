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
             {/* <div className="pt-2 xl:gap-x-20 xl:flex xl:items-start">
                <aside className="hidden xl:block xl:sticky xl:top-20 xl:order-2 xl:-me-60 xl:basis-60">
                    <Toc tocs={article.toc} />
                </aside>
                <div>
                    <BlogHeader article={article} />
                    <BlogContent 
                        content={article.body} 
                        className="pt-6 max-w-none prose-a:no-underline hover:prose-a:underline prose-teal dark:prose-green" 
                    />
                </div>
            </div>
            <BlogFooter />  */}
            <BlogHeader article={article} />
            <BlogContent 
                content={article.body} 
                className="pt-6 max-w-none prose-a:no-underline hover:prose-a:underline" 
            />
            {/* <div className="pt-2 xl:gap-y-20 xl:flex-col xl:items-start">
                <Toc tocs={article.toc} />
            </div> */}
            <BlogFooter />
        </div>
    )
}