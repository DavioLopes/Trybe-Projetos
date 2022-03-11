const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const talker = await readFile('./talker.json', 'utf-8');
    const parsedTalker = JSON.parse(talker);
    const findTalker = parsedTalker.findIndex((i) => parseInt(i.id, 10) === parseInt(id, 10));
    const updateTalker = { id: Number(id), name, age, talk: { watchedAt, rate } };
    parsedTalker[findTalker] = updateTalker;
    const strigifiedTalk = JSON.stringify(parsedTalker, null, 2);

    await writeFile('./talker.json', strigifiedTalk);
    return res.status(200).json(updateTalker);
  } catch (e) {
    return next(e);
  }
};