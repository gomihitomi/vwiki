import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "バーチャルインターネットラクガキマンwiki",
  description: "バーチャルインターネットラクガキマンのwikiです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="w-full h-screen">{children}</div>
      </body>
    </html>
  );
}
