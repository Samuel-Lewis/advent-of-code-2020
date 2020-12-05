const keys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const solution = (input) => {
  return input
    .split("\n")
    .reduce(
      (acc, curr) => {
        if (!curr) {
          return [...acc, ""];
        }
        const last = acc.pop();
        return [...acc, `${last} ${curr} `];
      },
      [""]
    )
    .filter((line) => {
      let valid = true;
      keys.forEach((key) => {
        if (!line.includes(key + ":")) {
          valid = false;
        }
      });
      return valid;
    }).length;
};

module.exports = solution;
