"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [totalDays, setTotalDays] = useState("");
  const [holidays, setHolidays] = useState("");

  const totalDaysNum = Number(totalDays) || 0;
  const holidaysNum = Number(holidays) || 0;

  const workingDays = Math.max(totalDaysNum - holidaysNum, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-3 text-center">
          勤務日数計算ツール
        </h1>

        <p className="text-gray-700 mb-6 text-center">
          期間の日数と休日日数から、勤務日数の目安を計算できます。
        </p>

        <div className="space-y-4">
          <div>
            <label>期間の日数（日）</label>
            <input
              type="number"
              value={totalDays}
              onChange={(e) => setTotalDays(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：30"
            />
          </div>

          <div>
            <label>休日日数（日）</label>
            <input
              type="number"
              value={holidays}
              onChange={(e) => setHolidays(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              placeholder="例：8"
            />
          </div>
        </div>

        <div className="mt-8 space-y-2 text-lg border-t pt-6">
          <p className="font-bold text-green-600 text-xl">
            勤務日数: {workingDays.toLocaleString()}日
          </p>
        </div>
      </div>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
       <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>
  </li>
  <li>
    <a href="https://overtime-calc.vercel.app/">
      残業代計算ツール
    </a>
  </li>
  <li>
    <a href="https://take-home-pay-calc.vercel.app/">
      手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://annual-income-calc.vercel.app/">
      年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://bonus-calc-six.vercel.app/">
      ボーナス手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://monthly-salary-calc.vercel.app/">
      月給計算ツール
    </a>
  </li>
  <li>
    <a href="https://daily-wage-calc.vercel.app/">
      日給計算ツール
    </a>
  </li>
  <li>
    <a href="https://tax-calc-murex.vercel.app/">
      所得税計算ツール
    </a>
  </li>
  <li>
    <a href="https://hourly-to-annual-calc.vercel.app/">
      時給から年収計算ツール
    </a>
  </li>
</ul>
      </section>

      <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">勤務日数の考え方</h2>

        <p className="text-gray-700 leading-relaxed">
          勤務日数は、対象期間の日数から休日日数を差し引いて計算できます。
          月の勤務日数やシフト日数を確認したい場合に便利です。
          実際の勤務日数は会社の休日、祝日、有給休暇、シフト条件などによって変わるため、
          目安としてご利用ください。
        </p>
      </section>

      <section className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-3">このサイトについて</h2>

        <p className="text-gray-700 leading-relaxed">
          ANT FARMでは、日常生活や仕事に役立つ無料Webツールを公開しています。
          この勤務日数計算ツールでは、期間の日数と休日日数から勤務日数の目安を簡単に確認できます。
          インストール不要でスマホからも利用できます。
        </p>
      </section>

      <footer className="mt-10 pt-6 text-sm text-gray-500 text-center">
        <p>© ANT FARM</p>
        <Link href="/privacy-policy" className="underline">
          プライバシーポリシー
        </Link>
      </footer>
    </main>
  );
}