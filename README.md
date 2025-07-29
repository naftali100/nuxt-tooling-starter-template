# Nuxt 3 Tooling Starter Template

A feature-packed Nuxt 3 starter template designed to streamline your development process.

## Features

- 📘 **TypeScript support**.
- ✨ **Prettier** for code formatting.
- 🛠️ **ESLint** for linting.
- ⚡ **Lint-staged** for efficient pre-commit checks.
- 🌗 **Dark mode** support.
- 🎨 **Tailwind CSS** integration.
- 🧩 **Shadcn components** for reusable UI elements.
- 🌐 **Internationalization (i18n)** with RTL support.
- 🔒 **Clerk** integration for authentication.
- 🗄️ **Drizzle ORM** for database management.
- 🐘 **Postgres** as the database.
- 🔔 **Vue-sonner** for toast notifications.
- 📦 **pre-made components** switchers, confirm modal and more.
- 🔒 **Security** configuration with strict CSP.
- 📝 **Logging** with Winston.

---

## Getting Started

### Step 1: Install Dependencies

Install the required project dependencies:

```bash
npm install
```

### Step 2: Configure Authentication

1. Sign up for a [Clerk](https://clerk.dev) account.
2. Add your **Clerk Publishable Key** and **Secret Key** to the `.env` file:

```env
NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
NUXT_CLERK_SECRET_KEY=your-secret-key
```

### Step 3: Update Configuration

Replace placeholder values across the project. Search for `CHANGE_ME` and update them with your own values, such as your website's domain.

### Step 4: customizing shadcn components

remove the `components/ui` folder, remove `components.json` file, and run

```bash
pnpm dlx shadcn-vue@latest init

pnpm dlx shadcn-vue@latest add
```

### Step 5: generate migrations & migrate database

```bash
npx drizzle-kit generate && npm run db:migrate
```

### Step 6: run the app

```bash
npm run dev
```

---

## Security

If you encounter Content Security Policy (CSP) errors during development, follow these steps:

1. Modify CSP settings in the `nuxt.config.ts` file.
2. If issues persist, consider disabling strict mode.

For further guidance, refer to:

- [Nuxt Security Module Documentation](https://nuxt-security.vercel.app/headers/csp)
- [Strict CSP Configuration](https://nuxt-security.vercel.app/advanced/strict-csp)
- [Improving CSP](https://nuxt-security.vercel.app/advanced/improve-security)

---

## Localization (i18n)

Internationalization is pre-configured. To add or modify locales:

1. Add your languages file in the `i18n` folder.
2. Add the desired locale to the `locales` array in `nuxt.config.ts`.
3. Update locale messages in `i18n.config.ts`.
4. Define locale types in `types/locales.ts`.

### Locale Object Structure

Each locale object in `nuxt.config.ts` should include:

- `code`: Locale code (e.g., `en`, `he`).
- `language`: Language and region code (e.g., `en-US`, `he-IL`).
- `dir`: Text direction (`ltr` or `rtl`).
- `name`: Display name for the locale.

#### Example Configuration

```ts
i18n: {
  locales: [
    {
      code: 'he',
      language: 'he-IL',
      dir: 'rtl',
      name: 'עברית',
    },
    {
      code: 'en',
      language: 'en-US',
      dir: 'ltr',
      name: 'English',
    },
    // Add more locales as needed...
  ],
}
```

### Notes

Some preloaded translation files include components and libraries. Update these translations as needed.

---

## SEO

Basic SEO configuration is included. To customize:

1. Update the `site` settings in `nuxt.config.ts`.
2. Modify the `title` and `description` in `app.vue`.

#### Titles

The default configuration shows only the app name. To display page-specific titles, set the `title` property in `useHead` and adjust the `titleTemplate` property. Refer to the [Nuxt SEO documentation](https://nuxtseo.com/learn/mastering-meta/titles) for more details.

---

## Removing Features

### Drizzle ORM

To remove Drizzle ORM:

1. Uninstall `drizzle-orm`, `drizzle-kit`, and `drizzle-zod` from `package.json`.
2. Remove related imports from `nuxt.config.ts` and `eslint.config.mjs`.
3. Delete the `server/db` directory.

### Clerk

To remove Clerk:

1. Uninstall `vue-clerk` from `package.json`.
2. Remove `clerk` imports from `nuxt.config.ts`.
3. Delete `clerk.ts` and `auth.ts` from `server/middleware`.
4. Remove the `contentSecurityPolicy` configuration related to Clerk in `nuxt.config.ts`. Update or redefine the policy based on your requirements.

### Pre-made Components

This template comes with several pre-built components to streamline your development process, including:

- **Theme Switcher**: Easily toggle between light and dark modes.
- **Language Switcher**: Switch between different languages seamlessly.
- **Copy Token Value**: Quickly copy token values with a single click.
- **Confirmation Dialog**: User-friendly confirmation prompts.
- **Breadcrumbs**: Navigate through your app with ease.

If you wish to remove these components, simply delete the corresponding files from the `components` directory.

---

## Miscellaneous

### Customizing Page Transitions

You can personalize page transitions by modifying the CSS classes in `app.vue` and the `viewTransition` settings in `nuxt.config.ts`.

### Redirecting Output

Nuxt errors in development mode can produce lengthy logs due to extensive configurations. To simplify debugging, redirect the output to a file by running:

```bash
pnpm dev > output.txt 2>&1
```

### Adjusting Logging Levels

Currently, logging too verbose for easy debugging. Fine-tune the logging settings by editing the following files:

- `utils/logger.ts`
- `server/plugins/logger-plugin.ts`

## License

This project is licensed under the [MIT License](./LICENSE).

## TODO

- [x] update clerk to official version (done, theme switch not working)
- [x] update tailwind to v4
