const reg = /(\d+)-(\d+) (\w): (.*)/g;
const solution = (input) => {
  return input.split("\n").filter((line) => {
    if (!line) {
      return false;
    }

    let [_, pos1, pos2, char, password] = [...line.matchAll(reg)][0];
    pos1--;
    pos2--;

    return (
      (password[pos1] === char && password[pos2] !== char) ||
      (password[pos1] !== char && password[pos2] === char)
    );
  }).length;
};

module.exports = solution;
