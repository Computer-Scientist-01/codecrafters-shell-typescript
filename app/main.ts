import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function command() {
  rl.question("$ ", (answer: string) => {
    const tokens = answer.split(' ')
    let cmd = tokens[0]
    let args = tokens.slice(1)
    switch (cmd) {
      case "exit":
        process.exit(args[0]);
        break;
      case "echo":
        console.log(args.join(' '));
        break;
      case "type":
        console.log(['echo', 'exit', 'type'].includes(args[0]) ? `${args[0]} is a shell builtin` : `${args[0]}: not found`);
        break;
      default:
        console.log(`${answer}: command not found`);
    }
    command();
  });
}
command();