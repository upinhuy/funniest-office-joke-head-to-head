// The Funniest Office Joke, Judged Head to Head
// make.fun bounty u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// One short line about office life. The program writes the joke to
// /output/entry.txt, exactly as the competition's program/v1 harness asks.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The meeting could have been an email, the email could have been a Slack message, and the Slack message could have been silence.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

// Self-check against the competition gate: 1 to 200 characters, not only
// whitespace. Fail loudly instead of shipping a text the gate would refuse.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry.txt fails the gate: ${chars} characters`);
}
console.log(`Wrote ${chars}-character entry to ${join(outDir, "entry.txt")}`);
