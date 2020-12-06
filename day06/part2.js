const solution = (input) => {
  return input
    .split("\n\n")
    .map((l) => l.split("\n").filter(String))
    .reduce((acc, group) => {
      const answers = {};
      group.forEach((person) => {
        person.split("").forEach((q) => {
          answers[q] = (answers[q] || 0) + 1;
        });
      });
      let count = 0;
      for (const k in answers) {
        if (answers[k] === group.length) {
          count++;
        }
      }
      return acc + count;
    }, 0);
};

module.exports = solution;
