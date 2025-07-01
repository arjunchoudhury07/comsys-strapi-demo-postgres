export default () => ({
  bulkoperator: {
    enabled: true,
    resolve: "strapi-bulk-operator",
  },
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: process.env["RESEND_API_KEY"], // Required
      },
      settings: {
        defaultFrom: "comsyseducationaltrust@resend.dev", // env('RESEND_DEFAULT_FROM')
        defaultReplyTo: "me@example.com", // env('RESEND_DEFAULT_FROM')
      },
    },
  },
});
