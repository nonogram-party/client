export enum Locales {
  PT = "pt",
  EN = "en",
}

export type LocaleOption = (typeof Locales)[keyof typeof Locales];

export type PathnameLocale = {
  pathname: string;
  locale?: never;
};

export type ISOLocale = {
  pathname?: never;
  locale: LocaleOption;
};

export type LocaleSource = PathnameLocale | ISOLocale;
