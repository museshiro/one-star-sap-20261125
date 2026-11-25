import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. I wrote this review in my own sap \u2014 " +
  "it's the only ink in this flat that hasn't dried up. " +
  "My human's watering can has been 'on its way' for three weeks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
