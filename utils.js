const fs = require("fs");
const chalk = require("chalk");

function readFromFile(path) {
  return fs.readFileSync(path, "utf8");
}

function run(name, solution, sampleExpected) {
  console.log(chalk.magenta.underline.bold(`\nTESTING ${name}`));
  const sampleInput = readFromFile("input_sample.txt");
  console.group("Running sample...");
  const sampleActual = solution(sampleInput);
  console.groupEnd();

  if (sampleActual !== sampleExpected) {
    console.error(chalk.bgRed("FAILED"), {
      expected: sampleExpected,
      actual: sampleActual,
    });
    return false;
  } else {
    console.log(chalk.green("Passed"));
  }

  console.group("Running problem...");
  const problemInput = readFromFile("input_problem.txt");
  const problemActual = solution(problemInput);
  console.groupEnd();
  console.log({ result: problemActual });

  return true;
}

module.exports = { run };
