import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from 'next';
import { GetProjectByName } from "@/lib/api";

interface MetadataProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata
) {
    const slug = params.slug;
    const data = await GetProjectByName(slug);
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
            {/* <Suspense fallback={
                <div className='flex h-full w-full items-center justify-center'>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </div>
            }> */}
                {children}
            {/* </Suspense> */}
        </div>
    )
}