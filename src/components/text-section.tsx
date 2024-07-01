"use client"

import { WindupChildren } from "windups"

export function TextSection({children} : {children: React.ReactNode}) {
    return (
        <WindupChildren>
            {children}
        </WindupChildren>
    )
}