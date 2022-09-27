const express = require('express');
const postController = require('../controllers/post.controller');
const { authenticateMiddleware } = require('../middlewares/authenticateMiddleware');
const {
  validateFields,
  validateCategory,
} = require('../middlewares/createPost.validation');
const {
  verifyFields,
} = require('../middlewares/updatePost.validation');
const { authorizedUser } = require('../middlewares/authorizedUser.validation');
const { searchPost } = require('../middlewares/deletePost.validation');

const routers = express.Router();

routers.get('/', authenticateMiddleware, postController.getAllPosts);

routers.get('/:id', authenticateMiddleware, postController.getPostByPk);

routers.post(
  '/',
  authenticateMiddleware,
  validateFields,
  validateCategory,
  postController.createPost,
);

routers.put(
  '/:id',
  authenticateMiddleware,
  verifyFields,
  authorizedUser,
  postController.updatePost,
);

routers.delete(
  '/:id',
  authenticateMiddleware,
  searchPost,
  authorizedUser,
  postController.deletePost,
);

module.exports = routers;