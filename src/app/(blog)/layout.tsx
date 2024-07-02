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
      <div className="grid gap-y-8">
        {children}
      </div>
    )
}