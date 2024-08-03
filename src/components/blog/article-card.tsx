import { IArticle } from "@/lib/interface";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
// import { Badge } from "../ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Button } from "../ui/button";
// import Image from "next/image";

export interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
    article: IArticle,
};

export default function ArticleCard({article} : ArticleCardProps) {
    return (
        <div className="flex flex-col gap-y-1 items-start">
            <Link href={`/blog/${article.name}`}>
                <h2 className="text-lg hover:underline">{article.title}</h2>
            </Link>
            <div className="flex gap-x-2 text-sm text-muted-foreground">
                {article.tags && article.tags.map((tag) => (
                    <Link 
                        key={tag} 
                        href={`/blog/tags/${tag}`} 
                        className="hover:text-primary"
                    >
                        {`#${tag}`}
                    </Link>
                ))}
            </div>
            <span className="text-muted-foreground text-sm">
            {`
                ${formatDate(article.create_date)} 
                ${article.update_date ? `- ${formatDate(article.update_date)}` : ""}
           `}
            </span>
        </div>
        // <Card className="rounded-md border-2 border-border shadow-sm transition-all hover:border-foreground/25 hover:shadow-md">
        //     {/* {article.thumbnail && 
        //         <Image
        //             src={article.thumbnail}
        //             alt="resume-image"
        //             sizes="100vw"
        //             width={0}
        //             height={0}
        //             className={cn("w-auto h-auto rounded-2xl rounded-bl-none rounded-br-none border-b-2 border-border")}
        //         />
        //     } */}
        //     <Link href={`/blog/${article.name}`}>
        //         <CardHeader className="space-y-3">
        //             {article.draft && 
        //                 <CardDescription>
        //                     <Badge variant="red-subtle">Draft</Badge>
        //                 </CardDescription>
        //             }
        //             <CardTitle className="sm:text-xl text-lg">{article.title}</CardTitle>
        //             {/* <CardDescription className="space-x-2">
        //                 {article.tags && article.tags.map((tag) => (
        //                     <BlogTags tag={tag} key={tag}/>
        //                 ))}
        //             </CardDescription> */}
        //             <CardDescription>
        //                 {`
        //                     ${formatDate(article.create_date)} 
        //                     ${article.update_date ? `- ${formatDate(article.update_date)}` : ""}
        //                 `}
        //             </CardDescription>
        //         </CardHeader>
        //     </Link>
        //     {article.description && 
        //         <CardContent className="text-muted-foreground">
        //             {article.description}
        //         </CardContent>
        //     }
        // </Card>
    )
}