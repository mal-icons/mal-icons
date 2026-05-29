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
