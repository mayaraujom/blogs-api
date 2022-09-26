const express = require('express');
const userController = require('../controllers/user.controller');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUser,
} = require('../middlewares/createUser.validation');

const routers = express.Router();

routers.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUser,
  userController.createUser,
);

module.exports = routers;