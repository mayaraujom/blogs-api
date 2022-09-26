const userService = require('../services/userService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getUsers,
};