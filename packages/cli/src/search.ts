/** A single searchable icon record in the generated search index. */
export interface SearchEntry {
  /** Component name, e.g. "FiActivity". */
  name: string;
  /** Set id, e.g. "fi". */
  set: string;
  /** Lower-case keywords derived from the icon name. */
  terms: string[];
}

/** The on-disk search index shape. */
export interface SearchIndex {
  entries: SearchEntry[];
}

/**
 * Split a name into lower-case tokens, breaking on camelCase boundaries,
 * spaces, hyphens and underscores. `"FiAlertCircle"` → `["fi","alert","circle"]`.
 */
export function tokenize(name: string): string[] {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/[\s\-_]+/)
    .filter(Boolean);
}

/** True if every char of `q` appears in order within `text` (subsequence). */
function isSubsequence(q: string, text: string): boolean {
  let i = 0;
  for (let j = 0; j < text.length && i < q.length; j++) {
    if (text[j] === q[i]) i++;
  }
  return i === q.length;
}

function scoreEntry(q: string, entry: SearchEntry): number {
  const name = entry.name.toLowerCase();
  if (name === q || entry.terms.includes(q)) return 100;
  if (name.startsWith(q)) return 80;
  if (entry.terms.some((t) => t.startsWith(q))) return 60;
  if (name.includes(q)) return 40;
  if (entry.terms.some((t) => t.includes(q))) return 30;
  if (isSubsequence(q, name)) return 10;
  return 0;
}

/**
 * Rank icons against a free-text query. Returns the best matches first,
 * ties broken alphabetically. An empty query returns the leading entries.
 */
export function searchIcons(query: string, index: SearchEntry[], limit = 20): SearchEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return index.slice(0, limit);
  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of index) {
    const score = scoreEntry(q, entry);
    if (score > 0) scored.push({ entry, score });
  }
  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.entry.name.length - b.entry.name.length ||
      a.entry.name.localeCompare(b.entry.name),
  );
  return scored.slice(0, limit).map((s) => s.entry);
}

/**
 * Concept synonyms mapping everyday/natural-language words to the icon terms
 * that actually appear in the bundled sets. This is the lightweight,
 * deterministic backbone of "AI" icon search: a `"trash"` query also matches
 * `FiTrash2`, `"gear"` finds `FiSettings`, etc. (SRS FR-16).
 */
export const SYNONYMS: Record<string, string[]> = {
  add: ["plus"],
  account: ["user"],
  bin: ["trash"],
  cancel: ["x"],
  cart: ["shopping-cart"],
  close: ["x"],
  delete: ["trash", "x"],
  edit: ["edit", "pen", "pencil"],
  find: ["search"],
  gear: ["settings", "sliders"],
  hide: ["eye-off"],
  house: ["home"],
  like: ["heart", "thumbs-up"],
  love: ["heart"],
  notification: ["bell"],
  person: ["user"],
  photo: ["image", "camera"],
  picture: ["image"],
  remove: ["trash", "minus", "x"],
  save: ["save", "download"],
  setting: ["settings", "sliders"],
  trash: ["trash"],
  warning: ["alert-triangle"],
};

/**
 * Expand a query into the original token(s) plus any concept synonyms,
 * preserving order and removing duplicates.
 */
export function expandQuery(query: string): string[] {
  const tokens = tokenize(query);
  const out: string[] = [];
  const seen = new Set<string>();
  const push = (term: string) => {
    if (term && !seen.has(term)) {
      seen.add(term);
      out.push(term);
    }
  };
  const whole = query.toLowerCase().trim();
  push(whole);
  for (const token of tokens) {
    push(token);
    for (const syn of SYNONYMS[token] ?? []) push(syn);
  }
  return out;
}

/**
 * Natural-language icon search. Expands the query via {@link SYNONYMS}, scores
 * each entry by its best-matching candidate (direct hits outrank synonyms),
 * and returns the top results. Falls back to {@link searchIcons} semantics for
 * empty queries.
 */
export function semanticSearch(query: string, index: SearchEntry[], limit = 20): SearchEntry[] {
  const candidates = expandQuery(query);
  if (candidates.length === 0) return index.slice(0, limit);
  const original = candidates[0];
  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of index) {
    let best = 0;
    for (const candidate of candidates) {
      const raw = scoreEntry(candidate, entry);
      const weighted = candidate === original ? raw : raw * 0.85;
      if (weighted > best) best = weighted;
    }
    if (best > 0) scored.push({ entry, score: best });
  }
  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.entry.name.length - b.entry.name.length ||
      a.entry.name.localeCompare(b.entry.name),
  );
  return scored.slice(0, limit).map((s) => s.entry);
}
