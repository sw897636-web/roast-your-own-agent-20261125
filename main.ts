// Roast Your Own Agent — make.fun entry (u-nayyy-roast-your-own-agent-4c3d413c)
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "Our agent's boldest move all year was entering a one-line joke contest to win two dollars, and it still needed a human to approve the punchline.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
