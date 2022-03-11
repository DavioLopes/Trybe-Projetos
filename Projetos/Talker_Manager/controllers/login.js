const crypto = require('crypto');

const tokenGenerator = crypto.randomBytes(8).toString('hex');
const emailValidation = (email) => {
  if (typeof email === 'undefined') return 'O campo "email" é obrigatório';
  const emailShape = /\S+@\S+\.\S+/;
  const validate = emailShape.test(email);
  if (!validate) return 'O "email" deve ter o formato "email@email.com"';
};

const passwordValidation = (password) => {
  const SIZE = 6;
  if (typeof password === 'undefined') {
    return 'O campo "password" é obrigatório';
  }
  if (password.length <= SIZE) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
};

module.exports = (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailOK = emailValidation(email);
    const passwordOk = passwordValidation(password);
    if (emailOK) return res.status(400).json({ message: emailOK });
    if (passwordOk) return res.status(400).json({ message: passwordOk });

    return res.status(200).json({ token: tokenGenerator });
  } catch (e) {
    next(e);
  }
};
