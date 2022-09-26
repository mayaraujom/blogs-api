const express = require('express');
const userController = require('../controllers/user.controller');
const { authenticateMiddleware } = require('../middlewares/authenticateMiddleware');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUser,
} = require('../middlewares/createUser.validation');

const routers = express.Router();

routers.get(
  '/',
  authenticateMiddleware,
  userController.getUsers,
);

routers.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUser,
  userController.createUser,
);

module.exports = routers;