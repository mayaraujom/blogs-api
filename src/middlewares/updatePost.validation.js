const verifyFields = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  verifyFields,
};