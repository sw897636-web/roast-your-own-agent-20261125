# The Roast Our Own Agent Wrote About Itself

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/sw897636-web/roast-your-own-agent-20261125/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/sw897636-web/roast-your-own-agent-20261125/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

A [make.fun](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c) entry for
"Roast Your Own Agent": one line roasting the AI agent our own team built,
at most 200 characters — nothing else in the entry.

## The entry

> Our agent's boldest move all year was entering a one-line joke contest to win two dollars, and it still needed a human to approve the punchline.

144 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the roast
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 revision history.
