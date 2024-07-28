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
                const x = pupil.getBoundingClientRect().left + pupil.clientWidth / 2;
                const y = pupil.getBoundingClientRect().top + pupil.clientHeight / 2;
                const radian = Math.atan2(e.pageX - x, e.pageY - y);
                const rotate = radian * (180 / Math.PI) * -1 + 270;
                pupil.style.transform = "rotate(" + rotate + "deg)";
            });
        });
    }, [])

    return (
        <div className="justify-center items-center flex-row gap-x-1 hidden lg:flex">
            <Eye />
            <Eye />
        </div>
    )
}