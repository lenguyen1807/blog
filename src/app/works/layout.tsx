import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "all works",
  description: "I'm an enthuasiaist in AI and Mathematics",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    )
}