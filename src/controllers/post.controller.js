const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();

  return res.status(200).json(posts);
};

const getPostByPk = async (req, res) => {
  const { id } = req.params;

  const post = await postService.getPostByPk(id);

  if (!post) {
    res.status(404).json({ message: 'Post does not exist' });
  } res.status(200).json(post);
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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const updated = await postService.updatePost(id, req.body);

  return res.status(200).json(updated);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostByPk,
  updatePost,
};