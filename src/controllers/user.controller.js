const userService = require('../services/userService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};