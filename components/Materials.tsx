"use client";

import { useTranslations } from "next-intl";

export default function Materials() {
  const t = useTranslations("materials");
  const items = [0, 1, 2, 3, 4, 5, 6, 7] as const;

  return (
    <section className="materials">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="materials-grid">
          {items.map((i) => (
            <div className="material-item" key={i}>
              <div className="material-icon">{t(`items.${i}.icon`)}</div>
              <h4>{t(`items.${i}.name`)}</h4>
              <p>{t(`items.${i}.spec`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
