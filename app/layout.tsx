import { Space_Mono } from "next/font/google";
import type { Metadata } from "next";
import "styles/globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export const metadata: Metadata = {
  title: "Chimialrel's Portfolio",
  description: "Chimairel Pacaldo BSIT - 3B | Portfolio Website",
};

const spaceMono = Space_Mono({
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-sans"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", spaceMono.variable)}
    >
      <body>
        <ScrollToTop />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}