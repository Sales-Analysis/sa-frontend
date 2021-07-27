module.exports = {
  root: true,
  extends: [
    require.resolve('@sales-analysis/sa-frontend-configs/.eslintrc')
  ],
  plugins: ['formatjs'],
  rules: {
    'formatjs/no-offset': 'error'
  },
  ignorePatterns: ['/*.*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
};
