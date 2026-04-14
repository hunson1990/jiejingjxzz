"use client";

import { useTranslations } from "next-intl";

export default function Industries() {
  const t = useTranslations("industries");
  const items = [0, 1, 2, 3, 4, 5] as const;

  return (
    <section className="industries">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="industries-grid">
          {items.map((i) => (
            <div className="industry-item" key={i}>
              <div className="industry-icon">{t(`items.${i}.icon`)}</div>
              <h4>{t(`items.${i}.title`)}</h4>
              <p>{t(`items.${i}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
