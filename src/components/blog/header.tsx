import { IArticle } from "@/lib/interface"
import { cn, formatDate, readingTime } from "@/lib/utils"
// import Image from "next/image";
// import BlogTags from "./tags";

interface BlogHeaderProps {
    article: IArticle,
    className?: string
}

export default function BlogHeader({article, className} : BlogHeaderProps) {
    return (
        <div className={cn("space-y-3 pt-4 pb-10", className)}>
            {/* {
                article.thumbnail && (
                    <div className="aspect-h-9 aspect-w-16 mb-12">
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
            } */}
            <div className="text-3xl font-semibold">
                {article.title}
            </div>
            <div className="flex items-center gap-1.5">
            {article.update_date
            ? <div className="text-base text-muted-foreground">
                    {formatDate(article.update_date, true)}
                </div>
            : <div className="text-base text-muted-foreground">
                    {formatDate(article.create_date, true)}
                </div>
            }
                {/* <span>{"/"}</span>
                <div className="font-base text-base">
                    {readingTime(article.body)}
                </div> */}
            </div>
            {/* <div className="space-x-2">
                {article.tags && article.tags.map((tag) => (
                    <BlogTags tag={tag} className="sm:text-sm" key={tag}/>
                ))}
            </div> */}
        </div>
    )
}