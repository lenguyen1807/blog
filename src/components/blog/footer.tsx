// ref: https://github.com/srleom/astro-theme-resume/blob/main/src/layouts/BlogPost.astro

"use client"

import { useMediaQuery } from 'usehooks-ts'
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogFooter() {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    
    if (isDesktop) {
        return (
            <Button 
                className="z-auto fixed bottom-8 items-center justify-center rounded-full border-2 border-border border-dashed transition-all duration-300 end-8 h-14 w-14 flex"
                variant="outline"
                onClick={() => (window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }))}
            >
                <ChevronUp size={64}/>
            </Button>
        )
    } else {
        return (
            <div className="pt-10">
                <Button 
                    className="float-right"
                    variant="outline"
                    onClick={() => (window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }))}
                >
                    <ChevronUp className="h-5 w-5 mr-2" />
                    Go to top
                </Button>
            </div>
        )
    }
}