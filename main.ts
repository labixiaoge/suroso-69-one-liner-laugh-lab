import { readFileSync } from "node:fs";

// One-Liner Laugh Lab — entry for u-suroso-69-one-liner-laugh-lab-6ccf3aae
// The prompt: the excuse a robot vacuum gives after eating a sock.
// The entry is a single line of text, at most 200 characters.

const line: string = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();

if (line.length === 0) {
  throw new Error("entry.txt is empty");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line, no embedded line breaks");
}
if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200-character limit`);
}

console.log(line);
console.log(`(${line.length} characters)`);
