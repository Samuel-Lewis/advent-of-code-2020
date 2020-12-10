const solution = (input) => {
  const adapters = input
    .split("\n")
    .filter(String)
    .map(Number)
    .sort((a, b) => a - b);

  let diffs = {};

  adapters.unshift(0);
  adapters.push(adapters[adapters.length - 1] + 3);

  for (let i = 1; i < adapters.length; i++) {
    const jump = adapters[i] - adapters[i - 1];
    diffs[jump] = (diffs[jump] || 0) + 1;
  }

  return diffs[1] * diffs[3];
};

module.exports = solution;
