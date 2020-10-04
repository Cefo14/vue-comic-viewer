module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
  },
  publicPath: process.env.VUE_APP_ROUTE,
};
