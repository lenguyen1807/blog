import { GetAllArticles, GetAllArticlesSort, GetAllUniqueTags } from "@/lib/api"
import { Tags } from "lucide-react";
import BlogTags from "@/components/blog/tags";
import ArticleCard from "@/components/blog/article-card";

export default async function Page() {
    const data = await GetAllArticles();
    const articles = GetAllArticlesSort(data);
    const tags = GetAllUniqueTags(articles);

    return (
        <div className="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8">
            <section>
                <ul className="flex flex-col justify-start gap-y-12">
                    {articles.map((article) => {
                        return (
                            <li key={article.name}>
                                <ArticleCard article={article} />
                            </li>
                        )
                    })}
                </ul>
            </section>
            {tags.length > 0 && (
                <aside>
                    <h2 className="mb-4 flex items-center text-lg font-semibold">
                        <Tags className="mr-2" />
                        Tags
                    </h2>
                    <ul className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <li key={tag}>
                                <BlogTags tag={tag} className="text-sm"/>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </div>
    )
}