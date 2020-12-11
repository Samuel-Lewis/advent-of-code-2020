const { readFromFile } = require("../utils");
const part1 = require("./part1");
const part2 = require("./part2");

describe("part1", () => {
  test("sample", () => {
    const input = readFromFile(__dirname + "/input_sample.txt");
    expect(part1(input)).toBe(37);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part1(input);
    console.log("PART 1 - SOLUTION", { result });
  });
});

describe("part2", () => {
  test("sample", () => {
    const input = readFromFile(__dirname + "/input_sample.txt");
    expect(part2(input)).toBe(26);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part2(input);
    console.log("PART 2 - SOLUTION", { result });
  });
});
