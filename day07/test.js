const { readFromFile } = require("../utils");
const part1 = require("./part1");
const part2 = require("./part2");

describe("part1", () => {
  test("sample", () => {
    const input = readFromFile(__dirname + "/input_sample.txt");
    expect(part1(input)).toBe(4);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part1(input);
    console.log("PART 1 - SOLUTION", { result });
  });
});

describe("part2", () => {
  test("sample 1", () => {
    const input = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;
    expect(part2(input)).toBe(126);
  });

  test("sample 2", () => {
    const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;
    expect(part2(input)).toBe(32);
  });

  test("problem", () => {
    const input = readFromFile(__dirname + "/input_problem.txt");
    const result = part2(input);
    console.log("PART 2 - SOLUTION", { result });
  });
});
