"use strict";

/**
 * task controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async create(ctx) {
    const newTask = await strapi.service("api::task.task").create(ctx);

    return newTask;
  },
}));
