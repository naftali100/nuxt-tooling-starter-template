import enLocale from './locales/en.json';
import heLocale from './locales/he.json';
import ArLocale from './locales/ar.json';
import FrLocale from './locales/fr.json';

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: enLocale,
    he: heLocale,
    ar: ArLocale,
    fr: FrLocale,
  },
}));
