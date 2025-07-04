import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TRPCReactProvider } from "@/trpc/client";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meet AI",
  description:
    "Create and organize your meetings using automation agents that will help you in your entire process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </TRPCReactProvider>
  );
}
