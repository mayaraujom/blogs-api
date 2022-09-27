const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });

  const payload = {
    displayName,
    email,
  };

  const token = generateToken(payload);

  return token;
};

const getUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUserByPk = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
    attributes: { exclude: ['password'] },
  });

  return user;
};

const deleteUser = async (id) => {
  await User.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserByPk,
  deleteUser,
};