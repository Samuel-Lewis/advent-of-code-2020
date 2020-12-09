const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
};

const solution = (input, preambleLength) => {
  const numbers = input.split("\n").filter(String).map(Number);
  for (let i = preambleLength; i < numbers.length; i++) {
    const correct = twoSum(
      [...numbers.slice(i - preambleLength, i)],
      numbers[i]
    );

    if (!correct) {
      return numbers[i];
    }
  }

  console.log("PART 1 - NO ANSWER");
  return undefined;
};

module.exports = solution;
