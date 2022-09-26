const express = require('express');
const categoryController = require('../controllers/category.controller');
const { authenticateMiddleware } = require('../middlewares/authenticateMiddleware');

const routers = express.Router();

routers.get('/', authenticateMiddleware, categoryController.getCategories);

routers.post('/', authenticateMiddleware, categoryController.createCategory);

module.exports = routers;