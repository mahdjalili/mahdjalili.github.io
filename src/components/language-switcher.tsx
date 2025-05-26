'use client';

import { languages, defaultLanguage } from '@/config/languages';
import { usePathname, useRouter } from 'next/navigation';

type LanguageSwitcherProps = {
  currentLang?: string;
};

export default function LanguageSwitcher({
  currentLang = defaultLanguage
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    const newPath = pathname.replace(/\/blog\/[a-z]{2}/, `/blog/${langCode}`);
    router.push(newPath);
  };

  return (
    <select
      value={currentLang}
      onChange={handleLanguageChange}
      className="w-[100px] px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
}
