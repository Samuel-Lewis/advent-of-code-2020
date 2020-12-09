const solution = (input) => {
  const instructions = input.split("\n").filter(String);

  function attempt(instPrime) {
    const seen = new Array(instPrime.size).fill(false);
    let acc = 0;
    let current = 0;

    while (current !== instPrime.length) {
      if (seen[current]) {
        return undefined;
      }
      seen[current] = true;

      const [op, dist] = instPrime[current].split(" ");
      switch (op) {
        case "jmp":
          current += Number(dist);
          break;
        case "acc":
          acc += Number(dist);
          current++;
          break;
        case "nop":
          current++;
          break;
      }
    }

    return acc;
  }

  return instructions
    .map((inst, index, array) => {
      const [op, dist] = inst.split(" ");
      if (op === "acc") {
        return;
      }

      const instCopy = [...array];
      instCopy[index] = `${op === "jmp" ? "nop" : "jmp"} ${dist}`;
      return attempt(instCopy);
    })
    .filter(Number)[0];
};

module.exports = solution;
