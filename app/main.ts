import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("[CS>-[01> :- ", (answer) => {
  rl.close();
});
