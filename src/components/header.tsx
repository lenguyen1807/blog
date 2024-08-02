import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

function LinkLabel({title, href} : {title: string, href: string}) {
    return (
        <Link
            className="flex-none text-muted-foreground hover:text-primary"
            href={href}
        >
            <Button variant="linkHover2" className="text-base">
                {title}
            </Button>
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
                    className="flex-none text-xl font-semibold flex gap-x-2 group"
                    href="/"
                >
                    <span className="block group-hover:hidden">{"ʕ´•ᴥ•`ʔ"}</span>
                    <span className="hidden group-hover:block">{"⍝ʕ´•ᴥ•`ʔ⍝"}</span>
                    <span>{"le nguyen"}</span>
                </Link>
                <div className="flex flex-row items-center justify-center">
                    <LinkLabel title="blog" href="/blog" />
                    <span className="text-muted-foreground">{"/"}</span>
                    <LinkLabel title="projects" href="/projects" />
                    <div className="hidden sm:block">
                        <span className="text-muted-foreground">{"/"}</span>
                        <LinkLabel title="note" href="https://le-nguyen-garden.vercel.app/" />
                        <span className="text-muted-foreground">{"/"}</span>
                        <LinkLabel title="resume" href="/resume.pdf" />
                    </div>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}