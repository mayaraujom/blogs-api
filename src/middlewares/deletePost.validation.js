const postService = require('../services/postService');

const searchPost = async (req, res, next) => {
  const { id } = req.params;
  const post = await postService.getPostByPk(id);
  if (!post) {
    res.status(404).json({ message: 'Post does not exist' });
  }
  next();
};

module.exports = {
  searchPost,
};