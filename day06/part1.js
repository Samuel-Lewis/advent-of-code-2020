const solution = (input) => {
  return input
    .split("\n\n")
    .map((l) => l.replace(/\n/g, ""))
    .map((l) => new Set(l))
    .reduce((a, b) => a + b.size, 0);
};

module.exports = solution;
