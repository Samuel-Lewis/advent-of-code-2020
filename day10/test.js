const { readFromFile } = require("../utils");
const part1 = require("./part1");
const part2 = require("./part2");

describe("part1", () => {
  test("sample 1", () => {
    const input = `16
10
15
5
1
11
7
19
6
12
4`;
    expect(part1(input)).toBe(7 * 5);
  });

  test("sample 2", () => {
    const input = readFromFile(__dirname + "/input_sample.txt");
    expect(part1(input)).toBe(22 * 10);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part1(input);
    console.log("PART 1 - SOLUTION", { result });
  });
});

describe("part2", () => {
  test("sample 1", () => {
    const input = `16
10
15
5
1
11
7
19
6
12
4`;
    expect(part2(input)).toBe(8);
  });

  test("sample 2", () => {
    const input = readFromFile(__dirname + "/input_sample.txt");
    expect(part2(input)).toBe(19208);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part2(input);
    console.log("PART 2 - SOLUTION", { result });
  });
});
