const solution = (input) => {
  const numbers = input.split("\n").filter(String).map(Number);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        const ni = numbers[i];
        const nj = numbers[j];
        const nk = numbers[k];

        if (ni + nj + nk === 2020) {
          return ni * nj * nk;
        }
      }
    }
  }
  return -1;
};

// run("Day01 - Part 2", solution, 241861950);

module.exports = solution;
