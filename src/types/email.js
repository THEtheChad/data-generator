const _ = require('lodash');

const surname = require('./name_last');
const prefixes = 'abcdefghijklmnopqrstuvwxyz';
const providers = [
  'gmail.com',
  'hotmail.com',
  'us.gov',
  'school.edu'
];

module.exports = function () {
  let prefix = prefixes[_.random(0, prefixes.length - 1)];
  let last = surname();
  let provider = providers[_.random(0, providers.length - 1)];

  return [prefix, last.toLowerCase(), '@', provider].join('');
};