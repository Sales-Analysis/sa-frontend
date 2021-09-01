const { addWebpackModuleRule, override } = require('customize-cra');

const postCssLoader = (config) => {
  config.module.rules.push({
    test: /\.css$/i,
    use: 'postcss-loader',
  });

  return config;
};

module.exports = override(
  postCssLoader,
  addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })
);
