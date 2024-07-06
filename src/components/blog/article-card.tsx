import { IArticle } from "@/lib/interface";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import BlogTags from "./tags";
import { Badge } from "../ui/badge";

export interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
    article: IArticle,
};

export default function ArticleCard({article} : ArticleCardProps) {
    return (
        <>
            {article.draft && 
                <div className="pb-2">
                    <Badge variant="green-subtle">Draft</Badge>
                </div>
            }
            <span className="min-w-[120px]">
                {formatDate(article.create_date)}
            </span>
            {article.update_date &&
                <>
                    {" - "}
                    <span className="min-w-[120px]">
                        {formatDate(article.update_date)}
                    </span>
                </>
            }
            <div className="space-y-2">
                <Link 
                    href={`/blog/${article.name}`}
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
        </>
    )
}