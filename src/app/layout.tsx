import { GoogleAnalytics } from "@next/third-parties/google"
import { Metadata, Viewport } from 'next'
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Transition from "@/components/transition";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans"
});

export const viewport: Viewport = {
  width: 'device-width',
}

export const metadata: Metadata = {
  verification: {
    google: "IXEnsPVZr2kilN8R7cEUNCEafBriaxF56diq5mhRdGg",
  },
  title: {
    template: "%s | le nguyen",
    default: "le nguyen",
  },
  description: "I'm an enthuasiaist in AI and Mathematics",
  keywords: [
    "Le Nguyen",
    "AI",
    "Deep Learning",
    "Machine Learning",
    "NextJS",
    "Blog",
    "Tutorial",
    "Mathematics"
  ],
  authors: [{ name: "Le Nguyen" }],
  creator: "Le Nguyen",
  publisher: "Le Nguyen",
  category: "technology",

  // TODO: Add opengraph here
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          {/* import katex */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossOrigin="anonymous" />
        </head>
        <body className={cn("antialiased flex justify-center font-sans max-w-2xl mb-40 flex-col md:flex-row mx-4 mt-8 sm:mx-auto", inter.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
              <Header />
                <Transition>
                  {children}
                </Transition>
              <Footer />
            </main>
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-HYZX015R4N" />
    </html>
  );
}