const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = ({ id, displayName, email }) => {
  const payload = {
    id,
    displayName,
    email,
  };

  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};

module.exports = {
  generateToken,
};