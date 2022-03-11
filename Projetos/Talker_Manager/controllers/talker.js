const { readFile } = require('fs/promises');

module.exports = async (_req, res, next) => {
  try {
    const talks = await readFile('./talker.json', 'utf-8');
    const talksJson = JSON.parse(talks);
    return res.status(200).json(talksJson);
  } catch (e) {
    return next(e);
  }
};
