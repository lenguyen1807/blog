import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { cn } from "@/lib/utils";
import { ThemeProvider } from "../modules/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Transition from "@/components/transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={cn("min-h-screen bg-background font-sans antialiased flex justify-center", inter.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
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