import type {
  DefineLocaleMessage,
  DefineDateTimeFormat,
  DefineNumberFormat,
} from 'vue-i18n';
import type he from '@/i18n/he.json';
import type en from '@/i18n/en.json';
import type ar from '@/i18n/ar.json';
import type fr from '@/i18n/fr.json';

export type LocaleMessages = typeof he & typeof en & typeof ar & typeof fr;

declare module 'vue-i18n' {
  // define the locale messages schema
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends LocaleMessages {}
}
