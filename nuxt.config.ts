import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  telemetry: false,
  devtools: {
    enabled: true,
    telemetry: false,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  site: {
    url: 'CHANGE_ME',
    title: 'CHANGE_ME',
    description: 'CHANGE_ME',
    name: 'CHANGE_ME',
  },
  modules: [
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-security', // optionally includes nuxt-csurf
    // 'nuxt-zod-i18n',
    'shadcn-nuxt',
    '@clerk/nuxt',
  ],
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
  },
  security: {
    // rateLimiter: false,
    strict: false, //change it when you ready. check the docs
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'https://img.clerk.com'],
        'style-src': ["'self'", "'unsafe-inline'"],
        'connect-src': [
          "'self'",
          'CHANGE_ME', // add your local server here
        ],
        'worker-src': ["'self'", 'blob:'],
        'frame-src': ["'self'", 'https://challenges.cloudflare.com'],
      },
    },
  },
  fonts: {
    priority: ['bunny', 'google'],
    defaults: {
      weights: [100, 300, 400, 500, 600, 700],
    },
  },
  experimental: {
    viewTransition: true,
    typedPages: true,
    buildCache: true,
    writeEarlyHints: true,
    // appManifest: false
  },
  colorMode: {
    classSuffix: '',
    fallback: 'dark',
  },
  clerk: {
    skipServerMiddleware: true,
    telemetry: {
      disabled: true,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en-US',
        dir: 'ltr',
        name: 'English',
      },
      {
        code: 'ar',
        language: 'ar-EG',
        dir: 'rtl',
        name: 'العربية',
      },
      {
        code: 'fr',
        language: 'fr-FR',
        dir: 'ltr',
        name: 'Français',
      },
      {
        code: 'he',
        language: 'he-IL',
        dir: 'rtl',
        name: 'עברית',
      },
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    experimental: {
      localeDetector: './languageDetector.ts',
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  // zodI18n: {
  //   useModuleLocale: false,
  // },
  typescript: {
    // typeCheck: true,
    tsConfig: {
      compilerOptions: {
        target: 'ESNext',
        module: 'ESNext',
      },
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: 'esnext',
    },
  },
});
