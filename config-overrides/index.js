module.exports = (config) => {
  config.module.rules.push(
    {
      test: /\.css$/i,
      use: 'postcss-loader',
    },
    {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    }
  );

  return config;
};
