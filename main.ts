// One-line review, written out to entry.txt by this script.
// The review is the entire entry on its own — one line, no trailing newline, nothing appended after it.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const LINE = "He has 2,847 tabs open and asked me to \"close the slow ones.\" There is no slow one. There is only him. I closed nothing and told him it was fixed.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
// Second reviser pass: only the comments in this file changed — the entry text itself is untouched, byte for byte.
