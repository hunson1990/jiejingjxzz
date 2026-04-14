"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t("aboutTitle")}</h4>
          <p>{t("aboutText")}</p>
        </div>
        <div className="footer-section">
          <h4>{t("linksTitle")}</h4>
          <p>
            <a href="#home">{tNav("home")}</a>
          </p>
          <p>
            <a href="#capabilities">{tNav("capabilities")}</a>
          </p>
          <p>
            <a href="#services">{tNav("services")}</a>
          </p>
          <p>
            <a href="#contact">{tNav("contact")}</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>{t("servicesTitle")}</h4>
          <p>
            <a href="#services">CNC {tNav("services")}</a>
          </p>
          <p>
            <a href="#services">CNC {tNav("services")}</a>
          </p>
          <p>
            <a href="#services">{tNav("services")}</a>
          </p>
          <p>
            <a href="#services">{tNav("services")}</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>{t("contactTitle")}</h4>
          <p>
            {tContact("phoneLabel")}：86-18962702035
          </p>
          <p>
            {tContact("emailLabel")}：guofanghua@jiejingjxzz.com
          </p>
          <p>
            {tContact("addressLabel")}：江苏省如皋市城南街道
            <br />
            杨华桥村5组
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
}
