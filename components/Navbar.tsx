"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">捷精机械</div>
        <ul className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              {t("home")}
            </a>
          </li>
          <li>
            <a href="#capabilities" onClick={handleLinkClick}>
              {t("capabilities")}
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              {t("services")}
            </a>
          </li>
          <li>
            <a href="#equipment" onClick={handleLinkClick}>
              {t("equipment")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              {t("contact")}
            </a>
          </li>
          <li>
            <a href="tel:86-18962702035" className="nav-phone">
              📞 {t("phone")}
            </a>
          </li>
          <li className="md:hidden">
            <LocaleSwitcher />
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <LocaleSwitcher />
        </div>
        <div
          className={`mobile-menu ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          role="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
