module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (typeof authorization === 'undefined') {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};
