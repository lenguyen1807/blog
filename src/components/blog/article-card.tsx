import { IArticle } from "@/lib/interface";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import BlogTags from "./tags";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
    article: IArticle,
};

export default function ArticleCard({article} : ArticleCardProps) {
    return (
        <Card className="flex flex-col rounded-2xl border-2 border-border shadow-sm transition-all hover:border-foreground/25 hover:shadow-md">
            {/* {article.thumbnail && 
                <Image
                    src={article.thumbnail}
                    alt="resume-image"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className={cn("w-auto h-auto rounded-2xl rounded-bl-none rounded-br-none border-b-2 border-border")}
                />
            } */}
            <Link href={`/blog/${article.name}`}>
                <CardHeader className="space-y-3">
                    {article.draft && 
                        <CardDescription>
                            <Badge variant="red-subtle">Draft</Badge>
                        </CardDescription>
                    }
                    <CardTitle className="sm:text-2xl text-xl hover:underline">{article.title}</CardTitle>
                    <CardDescription>
                        {`
                            ${formatDate(article.create_date)} 
                            ${article.update_date ? `- ${formatDate(article.update_date)}` : ""}
                        `}
                    </CardDescription>
                    <CardDescription className="space-x-2">
                        {article.tags && article.tags.map((tag) => (
                            <BlogTags tag={tag} key={tag}/>
                        ))}
                    </CardDescription>
                </CardHeader>
            </Link>
            {article.description && 
                <CardContent className="text-muted-foreground">
                    {article.description}
                </CardContent>
            }
        </Card>
    )
}