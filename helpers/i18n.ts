import { LocaleSource, Locales } from "types/locale";

export function getDefaultLocale() {
  return Locales.PT;
}

export function getLocalesList() {
  return Object.values(Locales);
}

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
