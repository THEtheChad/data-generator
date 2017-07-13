let int = 0;
module.exports = function (type = 'uid') {
  switch (type) {
    case 'integer':
      return int++;
    default:
      return require('uuid/v4')();
  }
};