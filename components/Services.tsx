"use client";

import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const services = [0, 1, 2, 3, 4, 5] as const;

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="services-grid">
          {services.map((i) => (
            <div className="service-card" key={i}>
              <div className="service-header">
                <h3>
                  {t(`items.${i}.icon`)} {t(`items.${i}.title`)}
                </h3>
                <div className="spec">{t(`items.${i}.spec`)}</div>
              </div>
              <div className="service-content">
                <ul>
                  {[0, 1, 2, 3].map((j) => (
                    <li key={j}>{t(`items.${i}.list.${j}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
