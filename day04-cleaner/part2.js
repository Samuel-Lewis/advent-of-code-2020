//

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const year = (line, code, min, max) => {
  const r = new RegExp(code + ":(\\d+) ", "g");
  const d = [...line.matchAll(r)];

  if (d.length !== 1) {
    return false;
  }
  const v = Number(d[0][1]);
  return !(v < min || v > max);
};

const check = (line) => {
  if (!year(line, "byr", 1920, 2002)) {
    return false;
  }

  if (!year(line, "iyr", 2010, 2020)) {
    return false;
  }

  if (!year(line, "eyr", 2020, 2030)) {
    return false;
  }

  // hgt
  const hgt = [...line.matchAll(/hgt:(\d+)(in|cm) /g)];
  if (hgt.length !== 1) {
    return false;
  }
  const hgtV = hgt[0][1];
  const unit = hgt[0][2];
  if (unit === "cm") {
    if (hgtV < 150 || hgtV > 193) {
      return false;
    }
  } else {
    if (hgtV < 59 || hgtV > 76) {
      return false;
    }
  }

  // hcl
  const hcl = [...line.matchAll(/hcl:#([a-f0-9]{6}) /g)];
  if (hcl.length !== 1) {
    return false;
  }

  // ecl
  const ecl = [...line.matchAll(/ecl:(amb|blu|brn|gry|grn|hzl|oth) /g)];
  if (ecl.length !== 1) {
    return false;
  }

  // pid
  const pid = [...line.matchAll(/pid:(\d{9}) /g)];
  if (pid.length !== 1) {
    return false;
  }

  return true;
};

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
    .filter(check).length;
};

module.exports = solution;
