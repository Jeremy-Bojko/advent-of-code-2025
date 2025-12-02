import { spawn } from "child_process";

// récupère l’argument : bun start 01
const day = process.argv[2];

if (!day) {
  console.error("Usage : bun start <dayNum>");
  process.exit(1);
}

const target = `src/day${day}/day${day}.spec.ts`;

spawn("bun", ["test", "--watch", target], {
  stdio: "inherit",
});
