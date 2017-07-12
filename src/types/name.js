const first = require('./name_first');
const last = require('./name_last');

module.exports = function () {
  return [first(), last()].join(' ');
};