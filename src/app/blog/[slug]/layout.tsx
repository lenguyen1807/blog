import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="w-full">
            <Button variant="outline" className="h-8 w-20">
                <Link href="/blog" className="flex">
                    <Undo2 className="h-5 w-5 mr-2" />
                    Back
                </Link>
            </Button>
            <div className="mt-8 gap-x-10 lg:items-start">
                <Suspense fallback={<span>Loading...</span>}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}