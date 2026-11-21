// gta6-meme-x-01 v2: copy POST.json (the X post address) from the repo to the output dir.
import * as fs from "node:fs";
import * as path from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const src = path.join(botDir, "POST.json");
const dest = path.join(outDir, "POST.json");

if (!fs.existsSync(src)) throw new Error(`POST.json not found at ${src}`);
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log(`copied ${src} -> ${dest}`);
