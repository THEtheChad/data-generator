const moment = require('moment');

module.exports = function (end = new Date(), format = 'YYYY-MM-DD') {
  let start = new Date();
  let rand = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

  return moment(rand).format(format);
};