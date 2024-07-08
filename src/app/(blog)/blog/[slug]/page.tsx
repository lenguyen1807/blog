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
        <div className={cn(lora.className)}>
            <div className="mt-8 gap-x-10 items-center justify-center">
                <BlogHeader article={article} />
                <aside className="lg:sticky top-20 order-2 -me-28 basis-60 lg:mr-[-10vw] lg:float-right lg:clear-right pb-6">
                    <Toc tocs={article.toc} />
                </aside>
                <BlogContent content={article.body} />
                <BlogFooter />
            </div>
        </div>
    )
}