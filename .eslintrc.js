const baseConfig = require.resolve('@sales-analysis/sa-frontend-configs/.eslintrc');
const localePrettierConfig = require('./.prettierrc.js');

module.exports = {
  root: true,
  extends: [baseConfig],
  plugins: ['formatjs'],
  rules: {
    'formatjs/no-offset': 'error',
    'prettier/prettier': ['error', localePrettierConfig],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
    },
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
