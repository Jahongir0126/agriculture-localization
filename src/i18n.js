
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const getSavedLanguage = () => localStorage.getItem('i18nextLng');
const saveLanguage = (lng) => localStorage.setItem('i18nextLng', lng);

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    lng: getSavedLanguage() || 'en',
  });

i18n.on('languageChanged', (lng) => {
  saveLanguage(lng);
});

export default i18n;
