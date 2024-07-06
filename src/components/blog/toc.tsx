"use client"

import { IToc } from "@/lib/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronsUpDown, Plus, X } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface TocProps extends React.HTMLAttributes<HTMLDivElement> {
    tocs: IToc[],
}

export default function Toc({tocs, className} : TocProps) {
    if (tocs.length == 0) {
        return null;
    }

    return (
        <Accordion type="single" collapsible className="relative w-fit">
            <AccordionItem value="toc">
                <AccordionTrigger className="text-base">Table of Contents</AccordionTrigger>
                <AccordionContent>
                    <RenderToc tocs={tocs} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        // <aside className={cn(className, "space-y-4")}>
        //     <h2 className="text-base flex items-center">
        //         Table of contents
        //     </h2>
        //     <RenderToc tocs={tocs} />
        // </aside>
    )
}

function RenderToc({tocs} : TocProps) {
    return (
        <ul>
            {tocs.map((toc) => (
                <li key={toc.data.id} className="space-y-2">
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

    return (
        <Link 
            href={`#${id}`}
            className={cn({
                "text-base": toc.depth === 2,
                "text-sm": toc.depth === 3,
                "text-xs": toc.depth === 4
            }, "py-1 hover:text-primary text-muted-foreground")}
            onClick={() => {
                window.scrollTo({
                    behavior: "smooth"
                })
            }}
        >
            {toc.value}
        </Link>
    )
}