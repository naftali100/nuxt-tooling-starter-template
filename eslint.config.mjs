// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
// import drizzle from 'eslint-plugin-drizzle';

export default withNuxt([
  {
    plugins: {
      // drizzle,
    },
    rules: {
      // ...drizzle.configs.all.rules,
      // to avoid conflicts with prettier
      'vue/html-self-closing': [
        'error',
        { html: { normal: 'always', void: 'always' } },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['app/pages/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['app/layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    // files: ['*'],
    // TMP: errors with unified-signatures rule in vue files
    rules: {
      '@typescript-eslint/unified-signatures': 'off',
    },
  },
]);
