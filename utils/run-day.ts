import { spawn } from "child_process";

// récupère l’argument : bun start 01
const day = process.argv[2];

if (!day) {
  console.error("Usage : bun start <dayNum>");
  process.exit(1);
}

const target = `src/day${day}/main.ts`;

spawn("nodemon", ["--exec", "bun", target], {
  stdio: "inherit",
});
