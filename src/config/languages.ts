export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
  // Add more languages as needed
];

export const defaultLanguage = 'en';

export function isValidLanguage(lang: string): boolean {
  return languages.some((language) => language.code === lang);
}
