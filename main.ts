import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry: a one-star review written by a house cat about its human.
// 121 characters, single line, under the 200-character cap.
const line =
  "One star. He filled my bowl halfway, called it dinner, then ate an entire pizza in front of me. I have contacted the dog.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
