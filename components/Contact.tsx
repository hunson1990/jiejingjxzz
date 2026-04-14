"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    material: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("form.success"));
    setForm({ company: "", name: "", phone: "", material: "", quantity: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t("infoTitle")}</h3>
            <div className="contact-item">
              <div className="icon">📍</div>
              <div>
                <h4>{t("addressLabel")}</h4>
                <p>{t("address")}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">📞</div>
              <div>
                <h4>{t("phoneLabel")}</h4>
                <p>{t("phone")}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">✉️</div>
              <div>
                <h4>{t("emailLabel")}</h4>
                <p>{t("email")}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">🕐</div>
              <div>
                <h4>{t("hoursLabel")}</h4>
                <p>{t("hours")}</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="company">{t("form.companyLabel")}</label>
                <input
                  type="text"
                  id="company"
                  placeholder={t("form.companyPlaceholder")}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">{t("form.nameLabel")} *</label>
                <input
                  type="text"
                  id="name"
                  placeholder={t("form.namePlaceholder")}
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t("form.phoneLabel")} *</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder={t("form.phonePlaceholder")}
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="material">{t("form.materialLabel")}</label>
                <select
                  id="material"
                  value={form.material}
                  onChange={(e) => setForm({ ...form, material: e.target.value })}
                >
                  <option value="">{t("select.material.placeholder")}</option>
                  <option value="aluminum">{t("select.material.aluminum")}</option>
                  <option value="stainless">{t("select.material.stainless")}</option>
                  <option value="steel">{t("select.material.steel")}</option>
                  <option value="copper">{t("select.material.copper")}</option>
                  <option value="titanium">{t("select.material.titanium")}</option>
                  <option value="plastic">{t("select.material.plastic")}</option>
                  <option value="other">{t("select.material.other")}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">{t("form.quantityLabel")}</label>
                <select
                  id="quantity"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                >
                  <option value="">{t("select.quantity.placeholder")}</option>
                  <option value="prototype">{t("select.quantity.prototype")}</option>
                  <option value="small">{t("select.quantity.small")}</option>
                  <option value="medium">{t("select.quantity.medium")}</option>
                  <option value="large">{t("select.quantity.large")}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t("form.messageLabel")}</label>
                <textarea
                  id="message"
                  placeholder={t("form.messagePlaceholder")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
