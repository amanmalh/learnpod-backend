module.exports = async (policyContext, config, { strapi }) => {
  console.log(policyContext.state.user);

  const { user } = policyContext.state;
  const { topicId } = policyContext.request.body.data;

  if (!user) {
    return false;
  }

  const topic = await strapi.entityService.findOne(
    "api::topic.topic",
    topicId,
    {
      populate: { owner: true },
    }
  );

  if (topic.owner.id !== user.id) {
    return false;
  }

  return true;
};
