const userService = require('../services/userService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json(users);
};

const getUserByPk = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUserByPk(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  } return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserByPk,
};