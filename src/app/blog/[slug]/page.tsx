import BlogContent from "@/components/blog/content";
import { GetArticleByName } from "@/lib/api";
import { notFound } from 'next/navigation';
import BlogHeader from "@/components/blog/header";
import BlogFooter from "@/components/blog/footer";
import { Lora } from "next/font/google";

type Props = {
    params: { slug: string };
};

const lora = Lora({
    subsets: ["latin", "vietnamese"]
});

export default async function Page({params} : Props) {
    const article = await GetArticleByName(params.slug);

    if (!article) {
        return notFound();
    }

    return (
        <>
            <BlogHeader article={article} className={lora.className} />
            <BlogContent content={article.body} className={lora.className} />
            <BlogFooter />
        </>
    )
}