module.exports = {
  routes: [
    {
      method: "POST",
      path: "/import-excel",
      handler: "api::import.import.importExcel",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
