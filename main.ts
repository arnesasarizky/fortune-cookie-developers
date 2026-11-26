import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for a software developer.
// The Friday 4:59 p.m. deploy and the 3 a.m. page are the same
// decision, seen from both ends: the pager introduces you to
// the code you thought you had finished with.
const FORTUNE =
  "The deploy you push at 4:59 p.m. on Friday is the one your pager will introduce you to at 3 a.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
