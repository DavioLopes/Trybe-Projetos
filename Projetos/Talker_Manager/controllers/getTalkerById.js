const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talks = await readFile('./talker.json', 'utf-8');
    const talksJson = JSON.parse(talks);
    const talk = talksJson.find((iten) => iten.id === parseInt(id, 10));
    if (!talk) { return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); }
    return res.status(200).json(talk);
  } catch (e) {
    return next(e);
  }
};