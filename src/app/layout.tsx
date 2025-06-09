import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
export const metadata: Metadata = {
  title: "Testimonia",
  description: "Build trust, boost credibility.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
