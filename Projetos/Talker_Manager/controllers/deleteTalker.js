const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talker = await readFile('./talker.json', 'utf-8');
    const parsedTalker = JSON.parse(talker);
    const findTalker = parsedTalker.findIndex(
      (i) => parseInt(i.id, 10) === parseInt(id, 10),
    );
    parsedTalker.splice(findTalker, 1);
    delete parsedTalker[0].id;
    const strigifiedTalk = JSON.stringify(parsedTalker, null, 2);
    await writeFile('./talker.json', strigifiedTalk);
    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
};
