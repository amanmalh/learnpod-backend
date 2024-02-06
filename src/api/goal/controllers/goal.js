"use strict";

/**
 * goal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::goal.goal", ({ strapi }) => ({
  async addTopics(ctx) {
    // console.log(ctx.req);
    try {
      const { id } = ctx.params;
      const { data } = ctx.request.body;

      /*
      // Use query engine api for bulk operations
      await strapi.db.query("api::topic.topic").createMany({
        data,
      });
      */

      const createdTopic = await strapi.entityService.create(
        "api::topic.topic",
        { data }
      );

      await strapi.entityService.update("api::goal.goal", id, {
        data: {
          topics: {
            connect: [createdTopic.id],
          },
        },
      });

      ctx.body = {
        status: "ok",
        // body: createdTopic,
      };
    } catch (err) {
      console.log(err);
      ctx.body = {
        status: "error",
      };
    }
  },
}));
