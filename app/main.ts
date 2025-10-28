import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function REPL() {
  rl.question("$ ", (answer) => {
    console.log(`${answer}: command not found`);
    REPL();
  });
}
REPL()
