import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginCypress from 'eslint-plugin-cypress/flat'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  // Add global ignore patterns properly inside the array
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // Recommended JS config
  js.configs.recommended,

  // Vue plugin essential rules (flat config)
  ...pluginVue.configs['flat/essential'],

  // Vitest recommended rules for test files
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  // Cypress recommended rules for E2E tests
  {
    ...pluginCypress.configs.recommended,
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
  },

  // Skip formatting for prettier
  skipFormatting,

  // Add env and rules in an object
  {
    env: {
      node: true,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
])
