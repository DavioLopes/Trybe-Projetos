const talker = require('./talker');
const getTalkerById = require('./getTalkerById');
const login = require('./login');
const createTalker = require('./createTalker');
const updateTalker = require('./updateTalker');
const deleteTalker = require('./deleteTalker');
const search = require('./search');

module.exports = {
  talker,
  getTalkerById,
  login,
  createTalker,
  updateTalker,
  deleteTalker,
  search,
};