import { MDXRemote } from "next-mdx-remote/rsc";
import { Markdown } from "./markdown";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from "remark-gfm";
import rehypeHightlight from "rehype-highlight"
import { MdxComponent } from "../mdx";
import { cn } from "@/lib/utils";

interface BlogContentProps {
    content: string,
    className?: string
}

export default async function BlogContent({content ,className} : BlogContentProps) {
    return (
        <article className={cn("flex-grow break-words", className)}>
            <MDXRemote 
                source={content}
                components={{ ...Markdown, ...MdxComponent }}
                options={{
                    mdxOptions: {
                        rehypePlugins: [rehypeHightlight, rehypeKatex],
                        remarkPlugins: [remarkGfm, remarkMath],
                        remarkRehypeOptions: {
                            footnoteLabel: 'Notes',
                            footnoteLabelTagName: 'h2'
                        },
                        development: process.env.NODE_ENV === 'development',
                    },
                }}
            />
        </article>
    )
};