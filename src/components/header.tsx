import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

function LinkLabel({title, href} : {title: string, href: string}) {
    return (
        <Link
            className="flex-none text-[1.05rem] text-muted-foreground hover:text-primary hover:underline underline-offset-2"
            href={href}
        >
            {title}
        </Link>
    )
}

export default function Header() {
    return (
        <header className="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start">
            <nav
                className="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center"
            >
                <Link
                    className="flex-none text-xl font-semibold"
                    href="/"
                >
                    le nguyen's blog
                </Link>
                <div className="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7">
                    <LinkLabel title="blog" href="/blog" />
                    <LinkLabel title="project" href="/project" />
                    <LinkLabel title="cv" href="/resume.pdf" />
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}