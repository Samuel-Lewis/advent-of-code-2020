const { readFromFile } = require("../utils");
const part1 = require("./part1");
const part2 = require("./part2");

describe("part1", () => {
  test("sample", () => {
    const input = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;
    expect(part1(input)).toBe(165);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part1(input);
    console.log("PART 1 - SOLUTION", { result });
  });
});

describe("part2", () => {
  test("sample", () => {
    const input = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;
    expect(part2(input)).toBe(208);
  });

  test("sample 2", () => {
    const input = `mask = 1000XX0X0X0X0011XX11110110X101101X01
mem[17353] = 91550
mem[3346] = 113780395
mem[25928] = 15887
mask = 1100X110000111X1X010X101X01110110X01
mem[22673] = 365674634
mem[56387] = 707
mem[59272] = 66101`;
    expect(part2(input)).toBe(undefined);
  });

  test.only("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part2(input);
    console.log("PART 2 - SOLUTION", { result });
  });
});
