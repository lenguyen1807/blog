import { MDXRemote } from "next-mdx-remote/rsc";
import { Markdown } from "./markdown";
import { MdxComponent } from "../mdx";
import { cn } from "@/lib/utils";

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from "remark-gfm";
import rehypeHightlight from "rehype-highlight"
import remarkBreaks from "remark-breaks";

interface BlogContentProps {
    content: string,
    className?: string
}

export default async function BlogContent({content ,className} : BlogContentProps) {
    return (
        <article className={cn("flex-grow break-words text-base lg:text-lg", className)}>
            <MDXRemote 
                source={content}
                components={{ ...Markdown, ...MdxComponent }}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkBreaks, remarkGfm, remarkMath],
                        rehypePlugins: [rehypeKatex, rehypeHightlight],
                        development: process.env.NODE_ENV === 'development',
                    },
                }}
            />
        </article>
    )
};