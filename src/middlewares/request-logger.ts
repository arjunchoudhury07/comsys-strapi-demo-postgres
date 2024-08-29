import { Strapi } from "@strapi/strapi";

module.exports = (config, { strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Math.ceil(Date.now() - start);

    // console.log(JSON.stringify(ctx.state, null, 2));
    let userName;
    if (ctx.state.user !== undefined) {
      userName = ctx.state.user.firstname + " " + ctx.state.user.lastname;
      console.log("User: ", userName);
    }
    if (ctx.request.method !== "GET") {
      strapi.service("api::request-logger.request-logger").create({
        data: {
          User: userName ?? null,
          Method: ctx.request.method,
          URL: ctx.request.url,
          Timestamp: new Date(),
          IP_Address: ctx.request.ip,
          // duration: delta,
          // statusCode: ctx.response.status,
        },
      });
    }
  };
};
