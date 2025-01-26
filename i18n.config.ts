import enLocale from './i18n/en.json';
import heLocale from './i18n/he.json';
import ArLocale from './i18n/ar.json';
import FrLocale from './i18n/fr.json';

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: enLocale,
    he: heLocale,
    ar: ArLocale,
    fr: FrLocale,
  },
}));
