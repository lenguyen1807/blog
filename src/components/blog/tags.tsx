import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";

export interface BlogTagsProps extends React.HTMLAttributes<HTMLDivElement> {
    tag: string,
};

export default function BlogTags({tag, className} : BlogTagsProps) {
    return (
        <Link href={`/blog/tags/${tag}`}>
            <Badge 
                className={cn(className, "hover:bg-muted-foreground hover:text-primary")} 
                variant="outline"
            >
                    {`#${tag}`}
            </Badge>
        </Link>
    )
}