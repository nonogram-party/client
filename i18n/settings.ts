import { LocaleSource, Locales } from "types/locale";

export const defaultLocale = Locales.PT;
export const locales = Object.values(Locales);

export function getLocalePartsFrom({ pathname, locale }: LocaleSource) {
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
}

export const defaultNS = "translation";

export function getOptions(lng = defaultLocale, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
