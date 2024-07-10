import { GetAllArticles, GetAllArticlesSort, GetAllUniqueTags } from "@/lib/api"
import ArticleCard from "@/components/blog/article-card";

export default async function Page() {
    const data = await GetAllArticles();
    const articles = GetAllArticlesSort(data);

    return (
        <ul className="flex flex-col justify-start gap-y-8">
            {articles.map((article) => {
                return (
                    <li key={article.name}>
                        <ArticleCard article={article} />
                    </li>
                )
            })}
        </ul>
        // <>
        //     <h1 className="text-xl lg:text-2xl items-center font-semibold flex">All Blog</h1>
        //     <div className="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-16">
        //         <section>
        //             <ul className="flex flex-col justify-start gap-y-12">
        //                 {articles.map((article) => {
        //                     return (
        //                         <li key={article.name}>
        //                             <ArticleCard article={article} />
        //                         </li>
        //                     )
        //                 })}
        //             </ul>
        //         </section>
        //         {tags.length > 0 && (
        //             <aside>
        //                 <h2 className="mb-4 flex items-center text-lg font-semibold">
        //                     <Tags className="mr-2" />
        //                     Tags
        //                 </h2>
        //                 <ul className="flex flex-wrap gap-2">
        //                     {tags.map((tag) => (
        //                         <li key={tag}>
        //                             <BlogTags tag={tag} className="text-sm"/>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </aside>
        //         )}
        //     </div>
        // </>
    )
}