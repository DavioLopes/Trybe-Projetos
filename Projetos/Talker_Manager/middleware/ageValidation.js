module.exports = (req, res, next) => {
  try {
    const ageMIN = 18;
    const { age } = req.body;
    if (typeof age === 'undefined') {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < ageMIN) {
      return res
        .status(400)
        .json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};
