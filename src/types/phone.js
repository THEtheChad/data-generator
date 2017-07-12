const _ = require('lodash');
const Code = require('./area_code');

module.exports = function () {
  let code = Code();
  let prefix = _.random(100, 999);
  let suffix = _.random(1000, 9999);

  return [code, prefix, suffix].join('-');
};