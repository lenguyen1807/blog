import { Button } from "@/components/ui/button";
import { Loader2, Undo2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from 'next';
import { GetArticleByName } from "@/lib/api";

interface MetadataProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata
) {
    const slug = params.slug;
    const data = await GetArticleByName(slug);
    const parentMeta = (await parent) as Metadata;

    if (!data) {
        return parentMeta;
    }

    return {
        title: data?.title,
        description: data?.description
    } satisfies Metadata;
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="grid gap-y-8">
            {/* <span className="border-l-2 pl-6 text-base">
                <strong>Note:</strong> If you see a page loading for too long, just press back button and click to it again or reload it. I'm sorry but I can't fix it 😞.
            </span> */}
            <div className="w-full">
                <Button variant="outline" className="h-8 w-20">
                    <Link href="/blog" className="flex">
                        <Undo2 className="h-5 w-5 mr-2" />
                        Back
                    </Link>
                </Button>
                {children}
            </div>
        </div>
    )
}