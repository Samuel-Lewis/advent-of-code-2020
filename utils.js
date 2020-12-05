const fs = require("fs");

function readFromFile(path) {
  return fs.readFileSync(path, "utf8");
}

module.exports = { readFromFile };
