const { Category } = require('../models');

const validateFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds[0]) {
    res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const searchCategory = async (id) => {
  const finded = await Category.findByPk(id);
  if (finded) {
    return true;
  } return false;
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const searchedCategories = await Promise.all(categoryIds.map(async (id) => searchCategory(id)));
  if (searchedCategories.some((result) => !result)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateFields,
  validateCategory,
};