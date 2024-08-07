import { IArticle } from "@/lib/interface"
import { cn, formatDate, readingTime } from "@/lib/utils"
import BlogTags from "./tags";

interface BlogHeaderProps {
    article: IArticle,
    className?: string
}

export default function BlogHeader({article, className} : BlogHeaderProps) {
    return (
        <div className={cn("space-y-3 pt-4 pb-10", className)}>
            <div className="text-3xl font-semibold">
                {article.title}
            </div>
            <div className="flex items-center gap-1.5">
            {article.update_date
            ? <div className="text-base text-muted-foreground">
                    {formatDate(article.update_date, false)}
                </div>
            : <div className="text-base text-muted-foreground">
                    {formatDate(article.create_date, false)}
                </div>
            }
            </div>
            <div className="space-x-2">
                {article.tags && article.tags.map((tag) => (
                    <BlogTags tag={tag} className="sm:text-sm" key={tag}/>
                ))}
            </div>
        </div>
    )
}