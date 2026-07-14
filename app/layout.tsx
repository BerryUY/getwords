import type { Metadata } from "next";
import { Geist, Geist_Mono, Chewy, Figtree, Stack_Sans_Headline } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chewy = Chewy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chewy",
});

const stackSansHeadline = Stack_Sans_Headline({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // los pesos que viste en la doc
  variable: "--font-stack-sans",
})

export const metadata: Metadata = {
  title: "GetWords | Your personal dictionary",
  description: "Save words you don't know, define them in your own way, and practice them later with AI-generated quizzes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn("dark", "h-full", "antialiased", geistSans.variable, geistMono.variable, stackSansHeadline.variable, chewy.variable, "font-sans", figtree.variable)}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
