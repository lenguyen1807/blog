import { GetAllArticles, GetAllArticlesSort, GetAllUniqueTags } from "@/lib/api"
import ArticleCard from "@/components/blog/article-card";

export default async function Page() {
    const data = await GetAllArticles();
    const articles = GetAllArticlesSort(data);

    return (
        <ul className="space-y-8">
            {articles.map((article) => {
                return (
                    <li key={article.name}>
                        <ArticleCard article={article} />
                    </li>
                )
            })}
        </ul>
    )
}