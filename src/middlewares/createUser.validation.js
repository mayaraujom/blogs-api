const { User } = require('../models');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    const message = '"displayName" length must be at least 8 characters long';
    return res.status(400).json({ message });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email.includes('@')) {
    const message = '"email" must be a valid email';
    return res.status(400).json({ message });
  }
  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    const message = '"password" length must be at least 6 characters long';
    return res.status(400).json({ message });
  }
  next();
};

const validateUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    const message = 'User already registered';
    return res.status(409).json({ message });
  }
  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUser,
};