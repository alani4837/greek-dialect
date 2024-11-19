import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

const i18n = createInstance();

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: require('../locales/en/translation.json')
      },
      el: {
        translation: require('../locales/el/translation.json')
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;