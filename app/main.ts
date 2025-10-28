import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();

rl.on("line", (answer) => {
  if (answer.trim() === "exit 0") process.exit(0);
  console.log(`${answer}: command not found`);
  rl.prompt();
});