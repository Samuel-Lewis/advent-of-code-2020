const solution = (input) => {
  const numbers = input.split("\n").map(Number);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const ni = numbers[i];
      const nj = numbers[j];

      if (ni + nj === 2020) {
        return ni * nj;
      }
    }
  }

  return -1;
};

module.exports = solution;
