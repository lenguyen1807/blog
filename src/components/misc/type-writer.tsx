"use client"

import { WindupChildren, Pace } from "windups"

export function TypeWriter({children} : {children: React.ReactNode}) {
    return (
        <WindupChildren>
            <Pace getPace={(char) => (15)}>
                {children}
            </Pace>
        </WindupChildren>
    )
}