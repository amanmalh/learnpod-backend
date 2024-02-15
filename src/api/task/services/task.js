"use strict";

/**
 * task service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::task.task", ({ strapi }) => ({
  async create(ctx) {
    const { title, topicId } = ctx.request.body.data;

    const newTask = await strapi.entityService.create("api::task.task", {
      data: {
        title,
        topic: topicId,
        status: "created",
        publishedAt: new Date(),
      },
    });

    return newTask;
  },
}));
