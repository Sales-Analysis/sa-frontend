module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('@sales-analysis/sa-frontend-configs/.eslintrc'),
  ],
  plugins: ['formatjs', '@typescript-eslint'],
  rules: {
    'formatjs/no-offset': 'error'
  },
  ignorePatterns: ['/*.*'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
    }
  ]
};
