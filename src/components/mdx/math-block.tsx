import { cn } from "@/lib/utils"
import "@/styles/latex.css"

export interface MdxMathBlockProps {
    type: "theorem" | "definition" | "lemma" | "abstract" | "proof",
    children: React.ReactNode
}

export default function MdxMathBlock({type, children} : MdxMathBlockProps) {
    return (
        <div className={cn(type)}>
            {children}
        </div>
    )
}