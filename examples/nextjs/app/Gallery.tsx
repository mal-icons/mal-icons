"use client";

import { useMemo, useState } from "react";
import {
  ICON_ANIMATIONS_CSS,
  type IconAnimation,
  IconContext,
  type IconWeight,
} from "@mal-icon/react";
import { FiSearch } from "@mal-icon/react/fi";
import { ICONS } from "./icons";

const WEIGHTS: IconWeight[] = ["thin", "light", "regular", "bold"];
const ANIMATIONS: Array<IconAnimation | "none"> = [
  "none",
  "spin",
  "pulse",
  "beat",
  "bounce",
];

export function Gallery() {
  const [size, setSize] = useState(32);
  const [color, setColor] = useState("#6366f1");
  const [weight, setWeight] = useState<IconWeight>("regular");
  const [animate, setAnimate] = useState<IconAnimation | "none">("none");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter(([name]) => name.toLowerCase().includes(q));
  }, [query]);

  const contextValue = useMemo(
    () => ({ size, color, weight }) as Record<string, unknown>,
    [size, color, weight],
  );

  return (
    <IconContext.Provider value={contextValue as never}>
      <style>{ICON_ANIMATIONS_CSS}</style>

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
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <label className="field">
          <span>Weight</span>
          <select
            value={weight}
            onChange={(e) => setWeight(e.target.value as IconWeight)}
          >
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
            onChange={(e) =>
              setAnimate(e.target.value as IconAnimation | "none")
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

      <main className="grid" aria-label="Icon gallery">
        {filtered.map(([name, Icon]) => (
          <div key={name} className="card">
            <span className="card__icon">
              <Icon
                animate={animate === "none" ? undefined : animate}
                title={name}
              />
            </span>
            <span className="card__name">{name}</span>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="empty">No icons match “{query}”.</p>
        )}
      </main>
    </IconContext.Provider>
  );
}
