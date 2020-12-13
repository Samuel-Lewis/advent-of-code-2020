const { readFromFile } = require("../utils");
const part1 = require("./part1");
const part2 = require("./part2");

describe("part1", () => {
  test("sample", () => {
    const input = readFromFile(__dirname + "/input_sample.txt");
    expect(part1(input)).toBe(295);
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
    expect(part2(input)).toBe(1068781);
  });

  test("sample 2", () => {
    const input = `
17,x,13,19`;
    expect(part2(input)).toBe(3417);
  });

  test("sample 3", () => {
    const input = `
67,7,59,61`;
    expect(part2(input)).toBe(754018);
  });

  test("sample 4", () => {
    const input = `
67,x,7,59,61`;
    expect(part2(input)).toBe(779210);
  });

  test("sample 5", () => {
    const input = `
67,7,x,59,61`;
    expect(part2(input)).toBe(1261476);
  });

  test("sample 6", () => {
    const input = `
1789,37,47,1889`;
    expect(part2(input)).toBe(1202161486);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part2(input);
    expect(result).toBe(266204454441577);
    console.log("PART 2 - SOLUTION", { result });
  });
});
