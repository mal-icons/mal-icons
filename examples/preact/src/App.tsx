import {
  ICON_ANIMATIONS_CSS,
  type IconAnimation,
  IconContext,
  type IconWeight,
  type PreactIconContextValue,
} from "@mal-icon/preact";
import { FiCheck, FiCopy, FiGithub, FiSearch } from "@mal-icon/preact/fi";
import { useMemo, useState } from "preact/hooks";
import { ICONS } from "./icons.ts";

const WEIGHTS: IconWeight[] = ["thin", "light", "regular", "bold"];
const ANIMATIONS: Array<IconAnimation | "none"> = ["none", "spin", "pulse", "beat", "bounce"];

export function App() {
  const [size, setSize] = useState(32);
  const [color, setColor] = useState("#6366f1");
  const [weight, setWeight] = useState<IconWeight>("regular");
  const [animate, setAnimate] = useState<IconAnimation | "none">("none");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter(([name]) => name.toLowerCase().includes(q));
  }, [query]);

  // `size` and `color` are theming-context fields; `weight` is a per-icon prop.
  const contextValue = useMemo<PreactIconContextValue>(() => ({ size, color }), [size, color]);

  async function copyImport(name: string) {
    await navigator.clipboard?.writeText(`import { ${name} } from "@mal-icon/preact/fi";`);
    setCopied(name);
    window.setTimeout(() => setCopied((c) => (c === name ? null : c)), 1200);
  }

  return (
    <IconContext.Provider value={contextValue}>
      {/* Animations are pure CSS; inject the keyframes once. */}
      <style>{ICON_ANIMATIONS_CSS}</style>

      <div class="page">
        <header class="hero">
          <div class="hero__badge">Preact 10 · Vite</div>
          <h1 class="hero__title">
            mal-icon <span>for Preact</span>
          </h1>
          <p class="hero__subtitle">
            Tree-shakeable, ahead-of-time generated icons with a single, consistent API. Theme
            everything through context and override per-icon.
          </p>
          <a
            class="hero__link"
            href="https://github.com/MAnasLatif/mal-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={18} /> View on GitHub
          </a>
        </header>

        <section class="panel" aria-label="Icon controls">
          <label class="field field--search">
            <FiSearch size={18} className="field__icon" />
            <input
              type="search"
              placeholder="Search icons…"
              value={query}
              onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            />
          </label>

          <label class="field">
            <span>Size · {size}px</span>
            <input
              type="range"
              min={16}
              max={64}
              value={size}
              onInput={(e) => setSize(Number((e.target as HTMLInputElement).value))}
            />
          </label>

          <label class="field">
            <span>Color</span>
            <input
              type="color"
              value={color}
              onInput={(e) => setColor((e.target as HTMLInputElement).value)}
            />
          </label>

          <label class="field">
            <span>Weight</span>
            <select
              value={weight}
              onChange={(e) => setWeight((e.target as HTMLSelectElement).value as IconWeight)}
            >
              {WEIGHTS.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </label>

          <label class="field">
            <span>Animation</span>
            <select
              value={animate}
              onChange={(e) =>
                setAnimate((e.target as HTMLSelectElement).value as IconAnimation | "none")
              }
            >
              {ANIMATIONS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>
        </section>

        <main class="grid" aria-label="Icon gallery">
          {filtered.map(([name, Icon]) => (
            <button
              key={name}
              type="button"
              class="card"
              title={`Copy import for ${name}`}
              onClick={() => copyImport(name)}
            >
              <span class="card__icon">
                <Icon
                  weight={weight}
                  animate={animate === "none" ? undefined : animate}
                  title={name}
                />
              </span>
              <span class="card__name">{name}</span>
              <span class="card__copy">
                {copied === name ? (
                  <>
                    <FiCheck size={14} /> Copied
                  </>
                ) : (
                  <>
                    <FiCopy size={14} /> Copy
                  </>
                )}
              </span>
            </button>
          ))}

          {filtered.length === 0 && <p class="empty">No icons match “{query}”.</p>}
        </main>

        <footer class="footer">
          Showing {filtered.length} of {ICONS.length} curated Feather icons. The full set ships 287
          tree-shakeable modules.
        </footer>
      </div>
    </IconContext.Provider>
  );
}
