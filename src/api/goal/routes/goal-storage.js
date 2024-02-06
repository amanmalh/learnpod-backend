module.exports = {
  routes: [
    {
      method: "POST",
      path: "/goals/:id/topics",
      handler: "goal.addTopics",
      config: {
        auth: false,
      },
    },
  ],
};
