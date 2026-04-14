import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "精密机械加工厂 - 专业CNC数控加工服务",
  description: "专注精密CNC加工20年，拥有先进设备和专业技术团队，为各行业客户提供高品质零部件加工服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${notoSansSC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
