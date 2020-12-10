const solution = (input) => {
  const adapters = input
    .split("\n")
    .filter(String)
    .map(Number)
    .sort((a, b) => a - b);

  adapters.unshift(0);
  adapters.push(adapters[adapters.length - 1] + 3);

  const mem = new Array(adapters.length).fill(undefined);
  function check(arr, start) {
    if (mem[start] !== undefined) {
      return mem[start];
    }

    if (start === arr.length - 1) {
      return 1;
    }

    let variations = 0;
    let cur = start + 1;
    while (arr[cur] - arr[start] <= 3) {
      const v = check(arr, cur);
      variations += v;
      mem[cur] = v;
      cur++;
    }
    return variations;
  }

  return check(adapters, 0);
};

module.exports = solution;
