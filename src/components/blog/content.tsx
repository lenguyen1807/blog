import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponent } from "../mdx";
import { cn } from "@/lib/utils";
import { Options } from "rehype-pretty-code";

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";

interface BlogContentProps {
    content: string,
    className?: string
}

const options: Options = {
    keepBackground: false,
    theme: "one-dark-pro",
    defaultLang: {
        block: "plaintext",
        inline: "plaintext",
    },
    grid: true
};

export default async function BlogContent({content, className} : BlogContentProps) {
    return (
        <article className={cn("flex-grow break-words prose prose-blue dark:prose-invert lg:prose-lg", className)}>
            <MDXRemote 
                source={content}
                components={{ ...MdxComponent }}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkBreaks, remarkGfm, remarkMath],
                        rehypePlugins: [rehypeKatex, [rehypePrettyCode, options]],
                        development: process.env.NODE_ENV === 'development',
                    },
                }}
            />
        </article>
    )
};