"use client"

import { useEffect, useState } from "react";

interface MdxCiteProps {
    bibKey: string
}

export default function MdxCite({bibKey} : MdxCiteProps) {
    const [element, setElement] = useState<HTMLElement>();

    useEffect(() => {
        const value = window.document.getElementById(`${bibKey}`);
        if (value != null) {
            setElement(value);
        }
    }, [])

    if (element === null) {
        return null;
    }

    const idx = element?.ariaLabel;
    return (
        <a 
            className="no-underline" 
            href={`#${bibKey}`}
        >
            {`[${idx ? Number(idx) + 1 : null}]`}
        </a>
    )
}