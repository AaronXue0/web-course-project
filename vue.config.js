module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Project Starry";
      return args;
    });
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/about", "/contact", "/games", "/sob"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
