import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 根路径：根据访客地理位置或语言偏好决定默认语言
  if (pathname === "/") {
    const country = request.headers.get("x-vercel-ip-country");
    const acceptLang = request.headers.get("accept-language") || "";

    let locale = routing.defaultLocale; // 'zh'

    if (country) {
      // Vercel 部署环境：根据 IP 国家判断
      if (country !== "CN") {
        locale = "en";
      }
    } else {
      // 本地开发或没有 IP 头：根据 Accept-Language 判断
      const prefersZh =
        acceptLang.toLowerCase().includes("zh") ||
        acceptLang.toLowerCase().includes("cn");
      if (!prefersZh) {
        locale = "en";
      }
    }

    request.nextUrl.pathname = `/${locale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // 其他路径交给 next-intl 处理
  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(zh|en)/:path*"],
};
