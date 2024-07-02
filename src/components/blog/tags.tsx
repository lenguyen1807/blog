import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";

export interface BlogTagsProps {
    tag: string,
    className?: string
};

export default function BlogTags({tag, className} : BlogTagsProps) {
    return (
        <Link href={`/tags/${tag}`}>
            <Badge 
                className={cn(className, "hover:bg-muted-foreground hover:text-primary")} 
                variant="outline"
            >
                    {`#${tag}`}
            </Badge>
        </Link>
    )
}