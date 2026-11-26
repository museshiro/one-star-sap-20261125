import { mkdirSync, writeFileSync } from "node:fs";

const firstHalf = "One star. My human rotated me 47 degrees away from the window to \u201cbalance my chi,\u201d then swapped my grow light for a lava lamp. ";
const secondHalf = "I am photosynthesizing in a s\u00e9ance.";
const line = firstHalf + secondHalf;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
