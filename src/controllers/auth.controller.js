const authService = require('../services/authService');

const auth = async (req, res) => {
  const authReturn = await authService.authenticate(req.body);
  const { status, message, token } = authReturn;
  if (token) {
    return res.status(200).json(authReturn);
  }
  return res.status(status).json({ message });
};

module.exports = {
  auth,
};