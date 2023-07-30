import { NextRequest, NextResponse } from "next/server";
import langParser from "accept-language-parser";

import {
  getDefaultLocale,
  getLocalePartsFrom,
  getLocalesList,
} from "helpers/i18n";

const defaultLocale = getDefaultLocale();
const locales = getLocalesList();

const findBestMatchingLocale = (acceptLangHeader: string) => {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader);

  // find the first locale that matches a locale in our list
  for (let i = 0; i < parsedLangs.length; i++) {
    const parsedLang = parsedLangs[i];
    const matchedLocale = locales.find((locale) => {
      const localeParts = getLocalePartsFrom({ locale });
      return parsedLang.code === localeParts.lang;
    });
    if (matchedLocale) {
      return matchedLocale;
    }
  }
  // if we didn't find a match, return the default locale
  return defaultLocale;
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.toLowerCase();
  const locale = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale });
    return pathname !== `/${localeParts.lang}`;
  });

  if (pathnameIsMissingValidLocale) {
    const matchedLocale = findBestMatchingLocale(
      request.headers.get("Accept-Language") || defaultLocale
    );

    if (matchedLocale !== defaultLocale) {
      const matchedLocaleParts = getLocalePartsFrom({ locale: matchedLocale });
      return NextResponse.redirect(
        new URL(`/${matchedLocaleParts.lang}${pathname}`, request.url)
      );
    } else {
      return NextResponse.rewrite(
        new URL(`/${locale.lang}${pathname}`, request.url)
      );
    }
  }

  if (currentPathnameParts.lang === locale.lang) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${locale.lang}`,
          pathname.startsWith("/") ? "/" : ""
        ),
        request.url
      )
    );
  }
}

export const config = {
  // do not localize next.js paths
  matcher: [
    "/((?!api|_next/static|_next/image|icon|assets|favicon.ico|sw.js).*)",
  ],
};
