import { IArticle } from "@/lib/interface"
import { cn, formatDate, readingTime } from "@/lib/utils"

interface BlogHeaderProps {
    article: IArticle,
    className?: string
}

export default function BlogHeader({article, className} : BlogHeaderProps) {
    return (
        <div className={cn("space-y-4 my-10", className)}>
            <div className="animate flex items-center gap-1.5">
                <div className="font-base text-base">
                    {formatDate(article.date)}
                </div>
                <span>{"/"}</span>
                <div className="font-base text-base">
                    {readingTime(article.body)}
                </div>
            </div>
            <div className="animate text-3xl lg:text-5xl font-semibold">
                {article.title}
            </div>
        </div>
    )
}