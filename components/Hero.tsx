"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">🏭 {t("badge")}</div>
        <h1>
          <span>{t("title1")}</span>
          <br />
          {t("title2")}
        </h1>
        <p style={{ whiteSpace: "pre-line" }}>{t("subtitle")}</p>
        <div className="hero-features">
          <span className="hero-feature">{t("feature1")}</span>
          <span className="hero-feature">{t("feature2")}</span>
          <span className="hero-feature">{t("feature3")}</span>
          <span className="hero-feature">{t("feature4")}</span>
        </div>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            {t("cta1")}
          </a>
          <a href="#services" className="btn btn-secondary">
            {t("cta2")}
          </a>
        </div>
      </div>
    </section>
  );
}
