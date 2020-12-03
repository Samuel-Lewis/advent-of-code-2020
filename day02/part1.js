const { run } = require("../utils");

const reg = /(\d+)-(\d+) (\w): (.*)/g;
const solution = (input) => {
  return input.split("\n").filter((line) => {
    if (!line) {
      return false;
    }

    const [_, min, max, char, password] = [...line.matchAll(reg)][0];
    const freq = (password.match(new RegExp(char, "g")) || []).length;

    return min <= freq && freq <= max;
  }).length;
};

run("Day02 - Part 1", solution, 2);
