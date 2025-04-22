'use client';

import { languages, defaultLanguage } from '@/config/languages';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

type LanguageSwitcherProps = {
  currentLang?: string;
};

export default function LanguageSwitcher({
  currentLang = defaultLanguage
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    // Replace the language part in the URL
    const newPath = pathname.replace(/\/blog\/[a-z]{2}/, `/blog/${langCode}`);
    router.push(newPath);
    setIsOpen(false);
  };

  // Get the current language display info
  const currentLanguageInfo =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        aria-label="Select language"
      >
        <span>{currentLanguageInfo.flag}</span>
        <span className="text-sm">
          {currentLanguageInfo.code.toUpperCase()}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-white dark:bg-neutral-900 rounded-md shadow-lg z-100">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center space-x-2 ${
                    currentLang === language.code
                      ? 'bg-neutral-100 dark:bg-neutral-800'
                      : ''
                  }`}
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
