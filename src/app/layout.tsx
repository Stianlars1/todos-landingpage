import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { mainPageMeta } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = mainPageMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
