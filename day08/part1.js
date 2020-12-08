const solution = (input) => {
  const instructions = input.split("\n").filter(String);
  const seen = new Array(instructions.size).fill(false);

  let acc = 0;
  let current = 0;

  while (!seen[current]) {
    seen[current] = true;

    const [op, dist] = instructions[current].split(" ");
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
};

module.exports = solution;
