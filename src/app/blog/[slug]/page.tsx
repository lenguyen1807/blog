import BlogContent from "@/components/blog/content";
import { GetArticleByName } from "@/lib/api";
import { notFound } from 'next/navigation';
import BlogHeader from "@/components/blog/header";
import BlogFooter from "@/components/blog/footer";
import { Lora } from "next/font/google";
import "@/styles/latex.css"

type Props = {
    params: { slug: string };
};

const lora = Lora({
    subsets: ["latin", "vietnamese"],
    weight: "400"
});

export default async function Page({params} : Props) {
    const article = await GetArticleByName(params.slug);

    if (!article) {
        return notFound();
    }

    return (
        <>
            <BlogHeader article={article} className={lora.className} />
            <div className="pt-6">
                <BlogContent content={article.body} className={lora.className} />
            </div>
            <BlogFooter />
        </>
    )
}