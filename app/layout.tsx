import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteHeader } from "./site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hola UI",
  description: "Design tokens + components for shadcn (Base UI).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-fg font-sans antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
