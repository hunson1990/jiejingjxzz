import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import zhMessages from "../../messages/zh.json";
import enMessages from "../../messages/en.json";

const messagesByLocale: Record<string, typeof zhMessages> = {
  zh: zhMessages,
  en: enMessages,
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "精密机械加工厂 - 专业CNC数控加工服务",
  description: "专注精密CNC加工20年，拥有先进设备和专业技术团队，为各行业客户提供高品质零部件加工服务。",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = messagesByLocale[locale] || messagesByLocale.zh;

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
