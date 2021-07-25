module.exports = {
  extends: [
    require.resolve('@sales-analysis/sa-frontend-configs/.eslintrc')
  ],
  plugins: ['formatjs'],
  rules: {
    'formatjs/no-offset': 'error'
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
