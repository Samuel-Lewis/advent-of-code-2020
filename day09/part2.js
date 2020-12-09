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

const findContig = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = [...arr.slice(i, j)].reduce((a, b) => a + b, 0);
      if (sum === target) {
        return arr.slice(i, j);
      }
    }
  }

  console.log("NO CONTIG");
};

const solution = (input, preambleLength) => {
  const numbers = input.split("\n").filter(String).map(Number);
  let target = undefined;

  for (let i = preambleLength; i < numbers.length; i++) {
    const correct = twoSum(
      [...numbers.slice(i - preambleLength, i)],
      numbers[i]
    );

    if (!correct) {
      target = numbers[i];
    }
  }

  const contig = findContig(numbers, target).sort((a, b) => a - b);
  return contig[0] + contig[contig.length - 1];
};

module.exports = solution;
