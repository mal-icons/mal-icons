# mal-icons — Agent Skill

An [Agent Skill](https://agentskills.io) that teaches AI coding agents how to
**find, import, theme, and troubleshoot** icons from the
[`@mal-icons/*`](https://github.com/mal-icons/mal-icons) SDK across React, Vue,
Svelte, Solid, Preact, Angular, Astro, vanilla Web, and React Native.

It bundles the full icon catalog (Feather `fi`, Circum `ci`, Ionicons `io`,
Lucide `lu`, Font Awesome Free `fa`, Font Awesome Free Brands `fab`, Font Awesome Free Regular `far`,
Typicons `ti`, Octicons `oc`, Devicons `dev`, Weather Icons `wi`, Ant Design `ad`,
Flat Color Icons `fc`, Grommet `gr`, Heroicons `hi`, Simple Line Icons `sl`, css.gg `cg`, Codicons `vsc`, Themify `tf` —
12,274 icons) with tags and descriptions, a fast search script, per-framework
setup guides, and best-practice references.

## Install

Use the [`skills` CLI](https://www.npmjs.com/package/skills) — it works with
Claude Code, GitHub Copilot, Cursor, Codex, and 60+ other agents:

```bash
# Install into the agents detected in your project
npx skills add mal-icons/mal-icons

# Preview the available skills without installing
npx skills add mal-icons/mal-icons --list

# Install just this skill, to a specific agent, globally
npx skills add mal-icons/mal-icons --skill mal-icons -a claude-code -g
```

Common options: `-a, --agent <id>` (target an agent), `-g, --global` (install
for all projects), `-s, --skill <name>` (pick skills), `-l, --list` (preview),
`-y, --yes` (no prompts). Manage installs with `npx skills list`,
`npx skills update`, and `npx skills remove`.

You can also drop this folder into your agent's skills directory manually
(e.g. `.claude/skills/`, `.agents/skills/`), or copy it into another repo.

## Use it

Once installed, ask your agent naturally:

- "Add a trash icon to this delete button."
- "Which mal-icons icon should I use for notifications?"
- "Set up @mal-icons in my Vue app and theme all icons blue."
- "Why does my per-icon import fail to type-check?"

The agent searches the catalog and writes the correct import for your framework.

## Search directly

```bash
node scripts/search.js "shopping cart"        # all sets
node scripts/search.js gear --set fi --limit 5
node scripts/search.js notification --json
```

Matches **name + tags + description** with everyday-word synonyms
(`gear`→settings, `house`→home, `bin`→trash).

## Contents

```
mal-icons/
├── SKILL.md                  # entry point (metadata + instructions)
├── scripts/
│   ├── search.js             # fast icon search CLI
│   └── build-packs.mjs       # regenerates the icon catalog
├── references/
│   ├── usage.md              # end-to-end user guide
│   ├── best-practices.md     # tree-shaking, a11y, SSR, licensing
│   ├── icons/                # fi/ci/io/fa packs (.json + .md): name, tags, desc
│   └── setup/                # per-framework setup guides
└── agents/                   # per-agent config descriptors
```

## Regenerate the catalog

After the library adds icons, refresh the packs (reads the library's search
index):

```bash
node scripts/build-packs.mjs
```

## License

[MIT](https://github.com/mal-icons/mal-icons/blob/main/LICENSE) © MALDevs.
Bundled icon sets keep their upstream licenses — Feather (MIT), Ionicons (MIT), Lucide (ISC), Octicons (MIT), Devicons (MIT), Ant Design (MIT), Font Awesome Free (CC-BY-4.0), Flat Color Icons (CC-BY-4.0),
Circum (MPL-2.0), Typicons (CC-BY-SA-4.0), Weather Icons (OFL-1.1), Grommet (Apache-2.0).
