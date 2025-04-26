import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import ClientOnlyWrapper from "@/components/common/ClientOnlyWrapper"; // 导入包装器

const ThemeToggle = dynamic(() => import("@/components/common/ThemeToggle"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuning Gu - Academic Portfolio",
  description: "Personal academic portfolio of Yuning Gu, featuring research, publications, and academic achievements.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-lg transition-colors min-h-screen`}>
        <ClientOnlyWrapper>
          <ThemeToggle />
        </ClientOnlyWrapper>
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
