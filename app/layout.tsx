import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "勤務日数計算ツール｜週4日・週5日勤務は月何日？",
  description:
    "勤務日数を無料で簡単計算。期間の日数と休日から勤務日数を計算できるほか、週4日・週5日など週の勤務日数から月平均・年間の勤務日数も確認できます。",

  verification: {
    google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
  },

  keywords: [
    "勤務日数 計算",
    "週4日勤務 月何日",
    "週5日勤務 月何日",
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