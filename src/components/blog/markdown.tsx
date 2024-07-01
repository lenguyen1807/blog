import { cn } from '@/lib/utils';
import { MDXComponents } from 'mdx/types';

export const Markdown : MDXComponents = {
    a: ({ children, ...props }) => {
        return (
        <a
            {...props}
            className="font-medium text-muted-foreground underline underline-offset-4"
        >
            {children}
        </a>
        );
    },
    h1: ({ children, className, ...props }) => {
        return (
            <h1 
                className={cn("scroll-m-20 text-3xl font-extrabold tracking-tight", className)} 
                {...props}
            >
                {children}
            </h1>
        )
    },
    h2: ({ children, className, ...props }) => {
        return (
            <h2 
                className={cn("mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0", className)}
                {...props}
            >
                {children}
            </h2>
        )
    },
    h3: ({ children, className, ...props }) => {
        return (
            <h3
                className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)}
                {...props}
            >
                {children}
            </h3>
        )
    },
    h4: ({ children, className, ...props }) => {
        return (
            <h4
                className={cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)}
                {...props}
            >
                {children}
            </h4>
        )
    },
    p: ({ children, className, ...props }) => {
        return (
            <p 
                className={cn("leading-7 [&:not(:first-child)]:mt-4 mb-3 hyphens-auto", className)}
                {...props}
            >
                {children}
            </p>
        );
    },
    blockquote: ({ children, className, ...props }) => {
        return (
            <blockquote
                className={cn("mt-6 border-l-2 pl-6 italic", className)}
                {...props}
            >
                {children}
            </blockquote>
        );
    },
    ul: ({ children, className, ...props }) => {
        return (
            <ul
                className={cn("my-2 ml-6 list-disc [&>li]:mt-2",className)}
                {...props}
            >
                {children}
            </ul>
        );
    },
    ol: ({ children, className, ...props }) => {
        return (
            <ol
                className={cn("my-2 ml-6 list-decimal [&>li]:mt-2",className)}
                {...props}
            >
                {children}
            </ol>
        );
    },
    li: ({ children, className, ...props }) => {
        return (
            <li className={cn("", className)} {...props}>
                {children}
            </li>
        );
    },
    code: ({ children, className, ...props }) => {
        return (
            <code className={cn("relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props}>
                {children}
            </code>
        )
    },
    table: ({ children, className, ...props }) => {
        return (
            <table className={cn("w-full mb-4", className)} {...props}>
                {children}
            </table>
        )
    },
    tr: ({ children, className, ...props }) => {
        return (
            <tr 
                className={cn("m-0 border-t p-0", className)} 
                {...props}
            >
                {children}
            </tr>
        )
    },
    th: ({ children, className, ...props }) => {
        return (
            <th 
                className={cn("border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-base", className)} 
                {...props}
            >
                {children}
            </th>
        )
    },
    td: ({ children, className, ...props }) => {
        return (
            <td 
                className={cn("border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right text-base", className)} 
                {...props}
            >
                {children}
            </td>
        )
    },
}