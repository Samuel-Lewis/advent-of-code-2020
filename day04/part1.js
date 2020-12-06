const keys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
const blankData = () => {
  return {
    byr: false, // (Birth Year)
    iyr: false, // (Issue Year)
    eyr: false, // (Expiration Year)
    hgt: false, // (Height)
    hcl: false, // (Hair Color)
    ecl: false, // (Eye Color)
    pid: false, // (Passport ID)
    cid: false, // (Country ID)
  };
};

const allTrue = (data) => {
  for (let o in data) {
    if (o === "cid") {
      continue;
    }

    if (!data[o]) {
      return false;
    }
  }

  return true;
};

const solution = (input) => {
  const data = input.split("\n");

  let valid = 0;
  let current = blankData();
  for (let i = 0; i < data.length; i++) {
    const line = data[i];

    if (line === "") {
      if (allTrue(current)) {
        valid++;
      }
      current = blankData();
      continue;
    }

    keys.forEach((key) => {
      if (line.includes(key + ":")) {
        current[key] = true;
      }
    });
  }

  return valid;
};

module.exports = solution;
