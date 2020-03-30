
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '../');

module.exports = {
  getOuterConfig() {
    const filePath = path.join(root, 'config.json');
    try {
      return JSON.parse(fs.readFileSync(filePath));
    } catch (e) {
      return {};
    }
  }
}