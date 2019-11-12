import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './translation/en';
import ru from './translation/ru';

const resources = {
  en,
  ru,
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'core',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
