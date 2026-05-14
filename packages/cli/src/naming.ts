/**
 * Convert a raw icon file name (e.g. "arrow-up-circle") into a PascalCase
 * component name with the set prefix (e.g. "FiArrowUpCircle").
 *
 * Leading digits are prefixed with an underscore so the result is a valid
 * JavaScript identifier.
 */
export function toComponentName(prefix: string, rawName: string): string {
  const pascal = rawName
    .replace(/\.svg$/i, "")
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  const safe = /^[0-9]/.test(pascal) ? `_${pascal}` : pascal;
  return `${prefix}${safe}`;
}

/** Convert a kebab-case attribute name to camelCase for React (stroke-width → strokeWidth). */
export function toCamelAttr(name: string): string {
  if (!name.includes("-")) return name;
  return name.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}
