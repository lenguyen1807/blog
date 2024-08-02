"use client"

import { IToc } from "@/lib/interface";
import { cn } from "@/lib/utils";
import { useHighlighted } from "@/lib/other/get-hightlight";

interface TocProps extends React.HTMLAttributes<HTMLDivElement> {
    tocs: IToc[],
}

export default function Toc({tocs, className} : TocProps) {
    if (tocs.length == 0) {
        return null;
    }

    return (
        <div className="relative w-max space-y-2">
            <div className="text-lg border-b-2"></div>
            <RenderToc tocs={tocs} />
        </div>
    )
}

/* ref: https://claritydev.net/blog/nextjs-blog-remark-interactive-table-of-contents */

function RenderToc({tocs} : TocProps) {
    return (
        <ul className="space-y-1">
            {tocs.map((toc) => (
                <li key={toc.data.id} className="space-y-1">
                    <TocLink toc={toc} />
                    {toc.children?.length > 0 && 
                    <RenderToc tocs={toc.children} />}
                </li>
            ))}
        </ul>
    )
}

function TocLink({toc} : {toc: IToc}) {
    const id = toc.data.id;
    const [highlighted, setHighlighted] = useHighlighted(id);

    return (
        <a 
            href={`#${id}`}
            className={cn({
                "text-base": toc.depth === 2,
                "text-sm pl-2": toc.depth === 3,
                "text-xs pl-4": toc.depth === 4,
                "text-primary": highlighted,
                "text-muted-foreground": !highlighted,
            }, "py-1 hover:text-primary")}
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                setHighlighted(id);
                document?.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
        >
            {toc.value}
        </a>
    )
}