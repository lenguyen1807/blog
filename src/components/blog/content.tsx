import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponent } from "../mdx";
import { cn } from "@/lib/utils";
import { Options } from "rehype-pretty-code";

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "@/lib/other/slug";

interface BlogContentProps {
    content: string,
    className?: string
}

const options: Options = {
    keepBackground: true,
    theme: {
        dark: "dark-plus",
        light: "light-plus"
    },
    defaultLang: {
        block: "plaintext",
        inline: "plaintext",
    },
    grid: true
};

export default async function BlogContent({content, className} : BlogContentProps) {
    return (
        <article 
            className={cn("flex-grow break-words prose dark:prose-invert", className)}
        >
            <MDXRemote 
                source={content}
                components={{ ...MdxComponent }}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkBreaks, remarkGfm, remarkMath],
                        rehypePlugins: [rehypeSlug, rehypeKatex, [rehypePrettyCode, options]],
                        development: process.env.NODE_ENV === 'development',
                    },
                }}
            />
        </article>
    )
};