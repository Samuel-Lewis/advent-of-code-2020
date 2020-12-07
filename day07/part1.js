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

  const findLeaves = (start, leaves) => {
    if (leaves.has(start)) {
      return leaves;
    }
    leaves.add(start);

    if (!childRules[start]) {
      return leaves;
    }

    childRules[start].forEach((b) => {
      findLeaves(b, leaves);
    });
    return leaves;
  };

  const leaves = findLeaves("shiny gold", new Set());
  leaves.delete("shiny gold");

  return leaves.size;
};

module.exports = solution;
