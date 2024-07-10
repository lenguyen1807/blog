import ArticleCard from "@/components/blog/article-card";
import { GetArticleByTag } from "@/lib/api";
import { Tags } from "lucide-react";

type Props = {
    params: { slug: string };
};

export default async function Page({params} : Props) {
    const articles = await GetArticleByTag(params.slug);

    return (
        <div className="space-y-12">
            <h1 className="text-xl lg:text-2xl items-center font-semibold flex">
                <Tags className="mr-3" /> Tags: {params.slug}
            </h1>
            <div className="gap-y-16 sm:gap-x-8">
                <section>
                    <ul className="justify-start space-y-8">
                        {articles.map((article) => {
                            return (
                                <li key={article.name}>
                                    <ArticleCard 
                                        article={article}  
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        </div>
    )
}