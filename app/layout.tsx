import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "勤務日数計算ツール｜期間日数と休日から勤務日数を自動計算",
  description:
    "期間の日数と休日日数を入力するだけで、勤務日数の目安を簡単に計算できる無料ツールです。",
    verification: {
  google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
},

  keywords: [
    "勤務日数 計算",
    "出勤日数 計算",
    "労働日数 計算",
    "月 勤務日数",
    "シフト 日数 計算",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
    crossOrigin="anonymous"
  />
</head>
      <body>{children}</body>
    </html>
  );
}