"use client";

import { useTranslations } from "next-intl";

export default function Capabilities() {
  const t = useTranslations("capabilities");
  const items = [
    { icon: "📐", title: t("items.0.title"), desc: t("items.0.desc") },
    { icon: "📏", title: t("items.1.title"), desc: t("items.1.desc") },
    { icon: "⚡", title: t("items.2.title"), desc: t("items.2.desc") },
    { icon: "🔧", title: t("items.3.title"), desc: t("items.3.desc") },
    { icon: "📋", title: t("items.4.title"), desc: t("items.4.desc") },
    { icon: "🚚", title: t("items.5.title"), desc: t("items.5.desc") },
  ];

  return (
    <section className="capabilities" id="capabilities">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="capabilities-grid">
          {items.map((item, idx) => (
            <div className="capability-card" key={idx}>
              <h3>
                {item.icon} {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
