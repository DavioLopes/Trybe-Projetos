const fs = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const {
      name,
      age,
      talk: { watchedAt, rate },
    } = req.body;
    const talks = await fs.readFile('./talker.json', 'utf-8');
    const talksJson = JSON.parse(talks);
    const newId = talksJson[talksJson.length - 1].id + 1;
    const newTalk = { id: newId, name, age, talk: { watchedAt, rate } };
    talksJson.push(newTalk);
    const strigifiedTalk = JSON.stringify(talksJson, null, 2);
    await fs.writeFile('./talker.json', strigifiedTalk);
    return res.status(201).json(newTalk);
  } catch (e) {
    return next(e);
  }
};
