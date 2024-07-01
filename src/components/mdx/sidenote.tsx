import "@/styles/latex.css"

export interface MdxSidenoteProps {
    note: string,
    content: string,
}

export default function MdxSidenote ({
    note,
    content
} : MdxSidenoteProps) {
    return (
        <div className="mt-10">
            {content}
            <label className="sidenote-number sidenote-toggle" />
            <aside className="sidenote">{note}</aside>
        </div>
    )
}