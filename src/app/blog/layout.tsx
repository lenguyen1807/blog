import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "all blogs",
  description: "I'm an enthuasiaist in AI and Mathematics",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <div className="grid gap-y-16">
        <span className="border-l-2 pl-6 text-base">
            <strong>Note:</strong> If you see a page loading too long, just press back button and click to it again. I'm sorry but I can't fix it for now 😞.
        </span>
        {children}
      </div>
    )
}