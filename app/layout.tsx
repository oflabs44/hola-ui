import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hola UI",
  description: "A personal design-token registry for shadcn (Base UI).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
