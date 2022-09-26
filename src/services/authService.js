const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const authenticate = async ({ email, password }) => {
  if (!email || !password) {
    const status = 400;
    const message = 'Some required fields are missing';

    return { status, message };
  }

  const user = await User.findOne({
    where: { email, password },
    attributes: ['email', 'display_name'],
  });

  if (!user) {
    const status = 400;
    const message = 'Invalid fields';

    return { status, message };
  }

  const token = generateToken(user.dataValues);

  const status = 200;

  return { status, token };
};

module.exports = {
  authenticate,
};