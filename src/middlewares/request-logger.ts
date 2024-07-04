import { Strapi } from "@strapi/strapi";

module.exports = (config, { strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Math.ceil(Date.now() - start);

    console.log(JSON.stringify(ctx.state, null, 2));
    strapi.service("api::request-log.request-log").create({
      data: {
        user: ctx.state.user ? ctx.state.user.id : null,
        Method: ctx.request.method,
        URL: ctx.request.url,
        Timestamp: new Date(),
        IP_Address: ctx.request.ip,
        // duration: delta,
        // statusCode: ctx.response.status,
      },
    });
  };
};
