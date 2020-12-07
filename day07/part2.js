const solution = (input) => {
  const parentRules = {};
  const childRules = {};

  input
    .split("\n")
    .filter(String)
    .map((l) => l.slice(0, -1))
    .forEach((line) => {
      const [parent, conds] = line.split(" bags contain ");
      parentRules[parent] = [];
      conds.split(", ").forEach((r) => {
        if (r === "no other bags") {
          return;
        }
        const [count, key1, key2] = r.split(" ");
        const child = `${key1} ${key2}`;
        if (!childRules[child]) {
          childRules[child] = [];
        }

        childRules[child].push(parent);
        parentRules[parent].push({ count: Number(count), child });
      });
    });

  const countLeafs = (start) => {
    let childCount = 1;
    parentRules[start].forEach((b) => {
      childCount += countLeafs(b.child) * b.count;
    });
    return childCount;
  };

  return countLeafs("shiny gold") - 1;
};

module.exports = solution;
