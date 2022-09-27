const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();

  return res.status(200).json(posts);
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const { id } = req.locals;

  const objCreate = {
    title,
    content,
    userId: id,
    published: Date.now(),
    updated: Date.now(),
    categoryIds,
  };

  const newPost = await postService.createPost(objCreate);

  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
  getAllPosts,
};