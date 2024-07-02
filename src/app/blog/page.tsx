import { GetAllArticles, GetAllArticlesSort, GetAllUniqueTags } from "@/lib/api"
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Tags } from "lucide-react";
import BlogTags from "@/components/blog/tags";

export default async function Page() {
    const data = await GetAllArticles();
    const articles = GetAllArticlesSort(data);
    const tags = GetAllUniqueTags(articles);

    return (
        <div className="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-8">
            <section>
                <ul className="flex flex-col gap-y-12">
                    {articles.map((article) => {
                        return (
                            <li key={article.name}>
                                <span className="min-w-[120px]">
                                    {formatDate(article.create_date)}
                                </span>
                                {" - "}
                                <span className="min-w-[120px]">
                                    {formatDate(article.update_date)}
                                </span>
                                <div className="space-y-2">
                                    <Link 
                                        href={`blog/${article.name}`}
                                        className={cn("font-medium text-xl hover:underline underline-offset-2")} 
                                    >
                                        {article.title}
                                    </Link>
                                    <div className="space-x-2">
                                        {article.tags && article.tags.map((tag) => (
                                            <BlogTags tag={tag} key={tag}/>
                                        ))}
                                    </div>
                                    <p className="line-clamp-3 block text-sm italic text-muted-foreground">
                                        {article.description}
                                    </p>
                                </div>
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