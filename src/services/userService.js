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

module.exports = {
  createUser,
};