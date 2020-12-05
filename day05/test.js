const { readFromFile } = require("../utils");
const part1 = require("./part1");
const part2 = require("./part2");

describe("part1", () => {
  test("sample 1", () => {
    const input = `BFFFBBFRRR`;
    expect(part1(input)).toBe(567);
  });

  test("sample 2", () => {
    const input = `FFFBBBFRRR`;
    expect(part1(input)).toBe(119);
  });

  test("sample 3", () => {
    const input = `BBFFBBFRLL`;
    expect(part1(input)).toBe(820);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part1(input);
    console.log("PART 1 - SOLUTION", { result });
  });
});

describe("part2", () => {
  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part2(input);
    console.log("PART 2 - SOLUTION", { result });
  });
});
