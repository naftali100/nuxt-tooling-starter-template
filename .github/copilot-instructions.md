# Nuxt 3 Tooling Starter Template - AI Agent Guide

## Architecture Overview

This is a full-stack Nuxt 3 application with:

- **Frontend**: `app/` directory with Vue 3 SFC components, Nuxt auto-imports, and TypeScript
- **Backend**: `server/` directory with Nitro API routes, middleware, and plugins
- **Database**: Drizzle ORM with PostgreSQL (schema in `server/db/schema/`)
- **Auth**: Clerk integration with server middleware protecting `/api/*` routes
- **UI**: shadcn-vue components in `app/components/ui/`, built on Reka UI primitives
- **i18n**: Multi-language support (en, ar, fr, he) with RTL, using `@nuxtjs/i18n`

## Key Conventions

### Component Patterns

- Use Vue 3 `<script setup>` with TypeScript for all components
- Destructure props with defaults directly: `const { prop = 'default' } = defineProps<PropsType>()`
- For components with many props, use `withDefaults(defineProps<T>(), { ... })`
- Import shadcn components from `@/components/ui/` - these are customized Reka UI wrappers
- Example from `DashboardBreadcrumbs.vue`: destructuring with defaults in setup

### File Structure

- **App components**: `app/components/` for reusable Vue components
- **Layouts**: `app/layouts/default.vue` is the base layout
- **Pages**: `app/pages/` with auto-routing (use `dashboard.vue` or `dashboard/index.vue` patterns)
- **Server API**: `server/api/` for API endpoints, `server/routes/` for custom routes
- **Middleware**: `app/middleware/` (client-side) and `server/middleware/` (server-side)
- **Types**: `types/` for shared TypeScript definitions

### Database & ORM

- Use `useDrizzle()` composable to access the database (defined in `server/db/useDrizzle.ts`)
- Schema files in `server/db/schema/`, export all schemas for auto-migration
- Auto-migration runs on server startup from `migrations/` directory
- Commands: `npm run db:generate` (create migrations), `npm run db:migrate` (apply)

### Authentication Flow

- `server/middleware/clerk.ts` protects all `/api/*` routes automatically
- Adds `event.context.user` with Clerk user data to protected routes
- Client-side: use `useAuth()` composable (from `@clerk/nuxt`)
- Route protection: add `definePageMeta({ middleware: 'auth' })` to pages needing auth

### Internationalization

- Locale config in `nuxt.config.ts`, messages in `i18n/locales/*.json`
- Use `$t('key')` in templates, `useI18n()` in script
- RTL support: locale objects have `dir` property, CSS uses `rtl:` Tailwind modifier
- URL strategy: `prefix_and_default` (e.g., `/dashboard` for default, `/fr/dashboard` for French)
- Locale detection: custom detector in `i18n/languageDetector.ts`
- Components should filter `localeCodes` from routes (see `DashboardBreadcrumbs.vue`)

### Logging & Error Handling

- Winston logger available: `import { logger } from '~/utils/logger'`
- Logs to `logs/` directory with daily rotation (error.log and log.log)
- Server errors auto-logged via `server/plugins/logger-plugin.ts` hook
- Client-side: custom fetch plugin (`app/plugins/custom-fetch.ts`) shows toast on errors
- Access via `$api` instead of `$fetch` for automatic error toasting

### Styling

- Tailwind CSS 4
- Dark mode via `@nuxtjs/color-mode` (class-based, fallback to dark)
- Component styling uses `cn()` utility from `app/lib/utils.ts` (Tailwind merge)
- RTL-aware: use `rtl:rotate-180` for directional icons/separators

## Development Workflows

### Running the App

```bash
npm run dev          # Start dev server (auto-loads .env)
npm run build        # Typecheck + production build
npm run typecheck    # Run Vue TSC type checking
```

### Linting & Formatting

```bash
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix lint issues
npm run format       # Prettier format all files
```

- Pre-commit hook (Husky + lint-staged) auto-formats and lints staged files
- ESLint config in `eslint.config.mjs` - allows single-word component names in `pages/` and `layouts/`

### Database Operations

```bash
npm run db:generate  # Generate migration files from schema changes
npm run db:migrate   # Apply migrations to database
npm run db:seed      # Seed database (if configured)
```

- Always generate migrations after schema changes before committing

### Adding shadcn Components

```bash
pnpm dlx shadcn-vue@latest add <component-name>
```

- Components install to `app/components/ui/` (configured in `nuxt.config.ts`)
- After installation, components are auto-imported in all Vue files

## Critical Integration Points

### Security (nuxt-security module)

- CSP configured in `nuxt.config.ts` under `security.headers.contentSecurityPolicy`
- Add Clerk domains to `img-src` and `connect-src`
- Set `strict: true` when ready for production (currently `false`)
- Rate limiting available but disabled by default

### Custom Fetch with Error Handling

- Use `const { $api } = useNuxtApp()` instead of `$fetch`
- Automatically shows vue-sonner toast on request/response errors
- Example: `await $api('/api/test')` will toast errors without manual handling

### Typed Routes

- `experimental.typedPages: true` enables `typed-router` auto-generation
- Use `navigateTo({ name: 'dashboard' })` with full type safety
- Page components get typed route params automatically

### Server Context

- Protected API routes have `event.context.user` (full Clerk user object)
- Use `useRuntimeConfig()` for environment variables (defined in `nuxt.config.ts`)
- Database connection string: `config.databaseUrl` (from `DATABASE_URL` env var)

## Common Patterns

### Creating Protected Pages

```typescript
// app/pages/dashboard.vue
definePageMeta({
  middleware: 'auth',
  layout: 'default',
});
```

### Using Database in API Routes

```typescript
// server/api/users.ts
export default defineEventHandler(async (event) => {
  const db = useDrizzle();
  const user = event.context.user; // From Clerk middleware
  // Query with Drizzle...
});
```

### Adding Translations

1. Add key-value pairs to all files in `i18n/locales/`
2. Update `types/locales.ts` if adding new locale
3. Use `$t('your.key')` in templates

### Custom Components with i18n

- Check component examples like `DashboardBreadcrumbs.vue` for patterns
- Filter locale codes from routes when building navigation
- Use `NuxtLinkLocale` for locale-aware links

## Environment Setup

Required `.env` variables:

- `DATABASE_URL`: PostgreSQL connection string
- `NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk public key
- `NUXT_CLERK_SECRET_KEY`: Clerk secret key

Search codebase for `CHANGE_ME` to find placeholder values needing configuration (site URL, title, description in `nuxt.config.ts`).
