module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        "/",
        "/About",
        "Contact",
        "/about",
        "/contact",
        "/games",
        "/sob",
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
