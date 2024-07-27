import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata, Viewport } from 'next'
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Transition from "@/components/transition";

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
        <body className={cn("min-h-screen bg-background font-sans antialiased flex justify-center", inter.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <main className="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 text-[0.92rem] leading-relaxed sm:px-10 lg:px-10">
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