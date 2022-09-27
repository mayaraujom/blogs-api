const { BlogPost, PostCategory } = require('../models');

const createPostCategory = async (categories, postId) => {
  await Promise.all(categories
    .map(async (categoryId) => PostCategory.create({ postId, categoryId })));
};

const createPost = async ({ title, content, userId, published, updated, categoryIds }) => {
  const newPost = await BlogPost.create({ title, content, userId, published, updated });

  await createPostCategory(categoryIds, newPost.id);

  return newPost;
};

module.exports = {
  createPost,
};