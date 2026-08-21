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
      <section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
  <h2 className="text-2xl font-bold mb-3">
    30日のうち休日が8日なら勤務日数は何日？
  </h2>
  <p>
    例えば30日間のうち休日が8日ある場合、
    勤務日数の目安は22日になります。
    対象期間の日数と休日日数を入力するだけで、
    実際に働く日数を簡単に確認できます。
  </p>
</div>

  <div>
  <h2 className="text-2xl font-bold mb-3">
    休日が増えると勤務日数はどう変わる？
  </h2>
  <p>
    同じ30日間でも、休日が8日なら勤務日数は22日、
    休日が10日なら勤務日数は20日になります。
    休日日数を変えて入力することで、
    勤務日数の違いを簡単に比較できます。
  </p>
</div>

  <div>
  <h2 className="text-2xl font-bold mb-3">
    シフト表から勤務日数を確認したいときにも使える
  </h2>
  <p>
    シフト勤務では、対象期間の日数と休日日数が分かれば、
    おおよその勤務日数を簡単に確認できます。
    月ごとに休日数が違う場合でも、
    条件を変えて入力することで勤務日数を比較できます。
  </p>
</div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
  Q. シフト制の勤務にも使えますか？<br />
  A. はい。対象期間の日数と休日日数から、勤務日数の目安を確認できます。<br /><br />

  Q. 給料や収入も計算できますか？<br />
  A. いいえ。このツールでは勤務日数のみを計算します。
</p>
  </div>

</section>
 <section className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
  <h2 className="text-xl font-bold mb-3">
    勤務日数の計算方法
  </h2>

  <p className="text-gray-700 leading-relaxed mb-4">
    このツールでは、対象期間の日数から休日日数を差し引いて、
    勤務日数の目安を計算しています。
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>勤務日数 ＝ 期間の日数 − 休日日数</li>
  </ul>

  <p className="mt-4 text-sm text-gray-600">
    例えば30日間のうち休日が8日の場合、
    勤務日数は22日になります。
    有給休暇や会社独自の休日などは、休日日数に含めて入力してください。
  </p>
</section>
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