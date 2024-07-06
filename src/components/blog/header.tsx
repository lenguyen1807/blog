import { IArticle } from "@/lib/interface"
import { cn, formatDate, readingTime } from "@/lib/utils"
import Image from "next/image";
import BlogTags from "./tags";

interface BlogHeaderProps {
    article: IArticle,
    className?: string
}

export default function BlogHeader({article, className} : BlogHeaderProps) {
    return (
        <div className={cn("space-y-6 my-10", className)}>
            {
                article.thumbnail && (
                    <div className="aspect-h-9 aspect-w-16 mb-6">
                        <Image 
                            src={article.thumbnail}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "auto", height: "auto"}}
                            alt="Thumbnail Image"
                            className="rounded-lg mx-auto"
                        />
                    </div>
                )
            }
            <div className="animate flex items-center gap-1.5">
                <div className="font-base text-base">
                    {formatDate(article.create_date)}
                </div>
                <span>{"/"}</span>
                <div className="font-base text-base">
                    {readingTime(article.body)}
                </div>
            </div>
            <div className="animate text-3xl lg:text-5xl font-semibold">
                {article.title}
            </div>
            {article.update_date && 
                <div className="font-base text-base">
                    {"Last update: "}
                    {formatDate(article.update_date)}
                </div>
            }
            <div className="space-x-2">
                {article.tags && article.tags.map((tag) => (
                    <BlogTags tag={tag} className="sm:text-sm" key={tag}/>
                ))}
            </div>
        </div>
    )
}