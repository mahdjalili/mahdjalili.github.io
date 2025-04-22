export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages = [
  {
    name: 'English',
    code: 'en',
    flag: '🇺🇸'
  },
  {
    name: 'فارسی',
    code: 'fa',
    flag: '🇮🇷'
  }
];

export const defaultLanguage = 'en';

export const isValidLanguage = (lang: string): boolean => {
  return languages.some((language) => language.code === lang);
};
