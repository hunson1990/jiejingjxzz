"use client";

import { useTranslations } from "next-intl";

export default function Advantages() {
  const t = useTranslations("advantages");
  const items = [0, 1, 2, 3, 4, 5] as const;

  return (
    <section className="advantages">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="advantages-grid">
          {items.map((i) => (
            <div className="advantage-card" key={i}>
              <div className="advantage-icon">{t(`items.${i}.icon`)}</div>
              <h3>{t(`items.${i}.title`)}</h3>
              <p>{t(`items.${i}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
