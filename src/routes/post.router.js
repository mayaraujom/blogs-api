const express = require('express');
const postController = require('../controllers/post.controller');
const { authenticateMiddleware } = require('../middlewares/authenticateMiddleware');
const {
  validateFields,
  validateCategory,
} = require('../middlewares/createPost.validation');

const routers = express.Router();

routers.post(
  '/',
  authenticateMiddleware,
  validateFields,
  validateCategory,
  postController.createPost,
);

module.exports = routers;