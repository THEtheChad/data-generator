const fs = require('fs');
const path = require('path');
const types_dir = path.resolve(__dirname, 'types');

class Generator {
  constructor() {
    fs.readdirSync(types_dir)
      .forEach(filename => {
        let method = filename.replace('.js', '');

        this.$add(method, require(path.resolve(types_dir, filename)));
      });
  }

  $add(type, func) {
    this[type] = func;
  }

  create(type, args = []) {
    return this[type].apply(null, args);
  }
}

module.exports = Generator;