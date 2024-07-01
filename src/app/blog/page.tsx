import { GetAllArticlesSort } from "@/lib/api"
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({
    subsets: ["latin"],
    style: "italic",
})

export default async function Page() {
    const articles = await GetAllArticlesSort();

    return (
        <div className="grid gap-y-16 sm:gap-x-8">
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
                                <div className="space-y-3">
                                    <Link 
                                        href={`blog/${article.name}`}
                                        className={cn("font-medium text-2xl hover:underline underline-offset-2", lora.className)} 
                                    >
                                        {article.title}
                                    </Link>
                                    <p className="line-clamp-3 block text-sm italic text-muted-foreground">
                                        {article.description}
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}