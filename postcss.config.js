const baseConfig = require('@sales-analysis/sa-frontend-configs/postcss.config');

module.exports = {
  plugins: [
    ...baseConfig().plugins,
    require('postcss-nested'),
    require('autoprefixer')
  ]
};
