import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { FirebaseProvider } from "./providers/FirebaseProvider";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "タイピング冒険記",
  description:
    "タイピングしながら敵とバトルして冒険していく無料のタイピングゲームです。対戦をしながら練習にもなります",
  keywords: "タイピングゲーム, タイピング練習, 対戦, 冒険, 無料",
  openGraph: {
    type: "website",
    title: "タイピング冒険記",
    description: "タイピング×冒険の無料ブラウザゲーム",
    siteName: "タイピング冒険記",
    url: "https://typing-adventure.com",
    images: [
      {
        url: "https://typing-adventure.com/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://typing-adventure.com/twitter.png"],
    title: "タイピング冒険記",
    description: "タイピング×冒険の無料ブラウザゲーム",
    site: "@sotetu79",
    creator: "@sotetu79",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} bg-main shadow-lg min-h-screen w-full flex justify-center`}
      >
        <FirebaseProvider>
          <div className="w-320">{children}</div>
        </FirebaseProvider>
      </body>
    </html>
  );
}
