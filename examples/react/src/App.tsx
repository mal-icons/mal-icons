import {
  ICON_ANIMATIONS_CSS,
  type IconAnimation,
  IconContext,
  type IconWeight,
  type ReactIconContextValue,
} from "@mal-icon/react";
import { FiCheck, FiCopy, FiGithub, FiSearch } from "@mal-icon/react/fi";
import { useMemo, useState } from "react";
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
  const contextValue = useMemo<ReactIconContextValue>(() => ({ size, color }), [size, color]);

  async function copyImport(name: string) {
    await navigator.clipboard?.writeText(`import { ${name} } from "@mal-icon/react/fi";`);
    setCopied(name);
    window.setTimeout(() => setCopied((c) => (c === name ? null : c)), 1200);
  }

  return (
    <IconContext.Provider value={contextValue}>
      {/* Animations are pure CSS; inject the keyframes once. */}
      <style>{ICON_ANIMATIONS_CSS}</style>

      <div className="page">
        <header className="hero">
          <div className="hero__badge">React 19 · Vite</div>
          <h1 className="hero__title">
            mal-icon <span>for React</span>
          </h1>
          <p className="hero__subtitle">
            Tree-shakeable, ahead-of-time generated icons with a single, consistent API. Theme
            everything through context and override per-icon.
          </p>
          <a
            className="hero__link"
            href="https://github.com/MAnasLatif/mal-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={18} /> View on GitHub
          </a>
        </header>

        <section className="panel" aria-label="Icon controls">
          <label className="field field--search">
            <FiSearch size={18} className="field__icon" />
            <input
              type="search"
              placeholder="Search icons…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          <label className="field">
            <span>Size · {size}px</span>
            <input
              type="range"
              min={16}
              max={64}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </label>

          <label className="field">
            <span>Color</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          </label>

          <label className="field">
            <span>Weight</span>
            <select value={weight} onChange={(e) => setWeight(e.target.value as IconWeight)}>
              {WEIGHTS.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Animation</span>
            <select
              value={animate}
              onChange={(e) => setAnimate(e.target.value as IconAnimation | "none")}
            >
              {ANIMATIONS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>
        </section>

        <main className="grid" aria-label="Icon gallery">
          {filtered.map(([name, Icon]) => (
            <button
              key={name}
              type="button"
              className="card"
              title={`Copy import for ${name}`}
              onClick={() => copyImport(name)}
            >
              <span className="card__icon">
                <Icon
                  weight={weight}
                  animate={animate === "none" ? undefined : animate}
                  title={name}
                />
              </span>
              <span className="card__name">{name}</span>
              <span className="card__copy">
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

          {filtered.length === 0 && <p className="empty">No icons match “{query}”.</p>}
        </main>

        <footer className="footer">
          Showing {filtered.length} of {ICONS.length} curated Feather icons. The full set ships 287
          tree-shakeable modules.
        </footer>
      </div>
    </IconContext.Provider>
  );
}
