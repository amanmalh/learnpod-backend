'use strict';

/**
 * task-assigment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-assigment.task-assigment');
