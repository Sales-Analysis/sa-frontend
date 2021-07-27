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
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    }
  ]
};
