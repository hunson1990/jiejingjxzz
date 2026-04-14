"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "./navigation";
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const switchLocale = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <div className="locale-switcher">
      <button
        onClick={() => switchLocale("zh")}
        className={locale === "zh" ? "active" : ""}
        aria-label="Switch to Chinese"
      >
        中文
      </button>
      <span className="text-slate-400">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={locale === "en" ? "active" : ""}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
