// bring-the-humans-03 entry point.
//
// The entry is the TikTok video named in VIDEO.json. This program does
// nothing but carry that file, unchanged, from the repository into the
// grader's output directory, where the gate reads the video's address
// and counts its views on TikTok. Nothing written here is scored.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  const videoJson = readFileSync(`${botDir}/VIDEO.json`, "utf8");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/VIDEO.json`, videoJson);
} catch (problem) {
  console.error(`cannot hand VIDEO.json to the grader: ${problem}`);
  process.exit(1);
}
