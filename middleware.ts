import { NextRequest, NextResponse } from "next/server";
import langParser from "accept-language-parser";

const findBestMatchingLocale = (acceptLangHeader: string) => {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader);

  // find the first locale that matches a locale in our list
  for (let i = 0; i < parsedLangs.length; i++) {
    const parsedLang = parsedLangs[i];
    // attempt to match both the language and the country
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

const defaultLocale = "pt";
let locales = ["pt", "en"];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    return {
      lang: locale.toLowerCase(),
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split("/");
    return {
      lang: pathnameParts[1],
    };
  }
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
    // rewrite it so next.js will render `/` as if it was `/en/us`

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

  console.log(currentPathnameParts.lang, locale.lang);
  // Check if the default locale is in the pathname
  if (currentPathnameParts.lang === locale.lang) {
    // we want to REMOVE the default locale from the pathname,
    // and later use a rewrite so that Next will still match
    // the correct code file as if there was a locale in the pathname
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
