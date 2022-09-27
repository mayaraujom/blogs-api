const { BlogPost } = require('../models');

const authorizedUser = async (req, res, next) => {
  const { id } = req.params;
  const post = await BlogPost.findOne({
    where: {
      id,
    },
  });
  const userId = req.locals.id;
  if (post.userId !== userId) {
    res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
  authorizedUser,
};