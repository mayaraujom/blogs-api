const { authenticateToken } = require('../utils/JWT');

const authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  const user = authenticateToken(token);

  const { status, message, error } = user;

  if (status) {
    return res.status(status).json({ message });
  }

  if (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.locals = user;

  next();
};

module.exports = {
  authenticateMiddleware,
};