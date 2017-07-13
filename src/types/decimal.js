const _ = require('lodash');

module.exports = function () {
  let mult = _.random(0, 10000);

  return Math.random() * mult;
};