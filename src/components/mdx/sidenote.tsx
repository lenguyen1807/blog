import "@/styles/latex.css"

export interface MdxSidenoteProps {
    note: string,
    content: string,
    id: string,
}

export default function MdxSidenote ({
    note,
    content,
    id,
} : MdxSidenoteProps) {
    return (
        <>
            {content}
            <label htmlFor={id} className="sidenote-toggle sidenote-number">
            </label>
            <input type="checkbox" id={id} className="sidenote-toggle" />
            <span className="sidenote">{note}</span>
        </>
    )
}