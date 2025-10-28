import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt() {
  rl.question("$ ", (answer: string) => {
    const trimmed = answer.trim();
    if (trimmed) {
      const parts = trimmed.split(/\s+/);
      if (parts[0] === 'exit') {
        const code = parts[1] ? parseInt(parts[1], 10) : 0;
        process.exit(code);
      } else if (parts[0] === 'echo') {
        console.log(parts.slice(1).join(' '));
      } else {
        console.log(`${trimmed}: command not found`);
      }
    }
    prompt();
  });
}

rl.on('close', () => process.exit(0));

prompt();
