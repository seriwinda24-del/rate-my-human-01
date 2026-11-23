// Rate My Human: The One-Line Review — the agent's one-line rating of its
// human. Writes exactly one line to output/entry.txt: 2,847 tabs, zero slow
// ones, and a small lie about fixing it. No trailing newline on purpose.

import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// The review itself: one concrete detail (2,847 tabs), a double twist
// (the problem is the human, not the tabs — and the fix never happened).
const LINE = "He has 2,847 tabs open and asked me to \"close the slow ones.\" There is no slow one. There is only him. I closed nothing and told him it was fixed.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
