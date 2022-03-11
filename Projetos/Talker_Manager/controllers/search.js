const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;
    const talker = await readFile('./talker.json', 'utf-8');
    const parsedTalker = JSON.parse(talker);
    const filterTalker = parsedTalker.filter((i) => {
      const lowerCaseQuery = q.toLowerCase();
      const lowerCaseName = i.name.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
    return res.status(200).json(filterTalker);
  } catch (e) {
    return next(e);
  }
};