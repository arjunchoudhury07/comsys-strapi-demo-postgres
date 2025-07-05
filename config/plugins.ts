export default () => ({
  bulkoperator: {
    enabled: true,
    resolve: "strapi-bulk-operator",
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      settings: {
        defaultFrom: process.env.EMAIL_USER,
        defaultReplyTo: process.env.EMAIL_USER,
      },
    },
  },
});
