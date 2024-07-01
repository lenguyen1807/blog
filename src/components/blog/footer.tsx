"use client"

import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogFooter() {
    return (
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
    )
}