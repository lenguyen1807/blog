"use client"

import { useEffect } from "react";

function Eye() {
    return (
        <div id="eye" className="rounded-full bg-white w-6 h-6 justify-center items-center flex border-black border overflow-hidden">
            <div id="pupil" className="bg-black rounded-full w-3 h-3"></div>
        </div>
    )
}

export default function EyeIcon() {
    useEffect(() => {
        const pupils = document.querySelectorAll<HTMLElement>("[id='pupil']");
        window.addEventListener("mousemove", (e) => {
            pupils.forEach((pupil) => {
                // ref: https://stackoverflow.com/questions/73779213/mouse-tracking-eyes-logo-animation-javascript
                const rect = pupil.getBoundingClientRect();
                const x = (e.pageX - rect.left) / 200;
                const y = (e.pageY - rect.top) / 200;
                pupil.style.transform = "translate3d(" + (x < pupil.clientWidth) ? `${x}px` : `${pupil.clientWidth}px` + "," + y + ", 0px)";
            });
        });
    }, [])

    return (
        <div className="justify-center items-center gap-x-1 flex">
            <Eye />
            <Eye />
        </div>
    )
}