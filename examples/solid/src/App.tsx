import {
  ICON_ANIMATIONS_CSS,
  type IconAnimation,
  IconContext,
  type IconWeight,
  type SolidIconContextValue,
} from "@mal-icons/solid";
import { FiCheck, FiCopy, FiGithub, FiSearch } from "@mal-icons/solid/fi";
import { createMemo, createSignal, For, Show } from "solid-js";
import { ICONS } from "./icons.ts";

const WEIGHTS: IconWeight[] = ["thin", "light", "regular", "bold"];
const ANIMATIONS: Array<IconAnimation | "none"> = [
  "none",
  "spin",
  "spin-reverse",
  "pulse",
  "beat",
  "bounce",
  "ping",
  "shake",
  "wiggle",
  "float",
  "heartbeat",
  "flip",
  "rotate",
  "zoom",
  "fade",
  "slide",
  "glow",
  "swing",
  "tada",
];

export function App() {
  const [size, setSize] = createSignal(32);
  const [color, setColor] = createSignal("#6366f1");
  const [weight, setWeight] = createSignal<IconWeight>("regular");
  const [animate, setAnimate] = createSignal<IconAnimation | "none">("none");
  const [query, setQuery] = createSignal("");
  const [copied, setCopied] = createSignal<string | null>(null);

  const filtered = createMemo(() => {
    const q = query().trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter(([name]) => name.toLowerCase().includes(q));
  });

  // `size` and `color` are theming-context fields; `weight` is a per-icon prop.
  const contextValue = createMemo<SolidIconContextValue>(() => ({ size: size(), color: color() }));

  async function copyImport(name: string) {
    await navigator.clipboard?.writeText(`import { ${name} } from "@mal-icons/solid/fi";`);
    setCopied(name);
    window.setTimeout(() => setCopied((c) => (c === name ? null : c)), 1200);
  }

  return (
    <IconContext.Provider value={contextValue()}>
      {/* Animations are pure CSS; inject the keyframes once. */}
      <style>{ICON_ANIMATIONS_CSS}</style>

      <div class="page">
        <header class="hero">
          <div class="hero__badge">Solid 1.9 · Vite</div>
          <h1 class="hero__title">
            mal-icons <span>for Solid</span>
          </h1>
          <p class="hero__subtitle">
            Tree-shakeable, ahead-of-time generated icons with a single, consistent API. Theme
            everything through context and override per-icon.
          </p>
          <a
            class="hero__link"
            href="https://github.com/MAnasLatif/mal-icons"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={18} /> View on GitHub
          </a>
        </header>

        <section class="panel" aria-label="Icon controls">
          <label class="field field--search">
            <FiSearch size={18} class="field__icon" />
            <input
              type="search"
              placeholder="Search icons…"
              value={query()}
              onInput={(e) => setQuery(e.currentTarget.value)}
            />
          </label>

          <label class="field">
            <span>Size · {size()}px</span>
            <input
              type="range"
              min={16}
              max={64}
              value={size()}
              onInput={(e) => setSize(Number(e.currentTarget.value))}
            />
          </label>

          <label class="field">
            <span>Color</span>
            <input type="color" value={color()} onInput={(e) => setColor(e.currentTarget.value)} />
          </label>

          <label class="field">
            <span>Weight</span>
            <select
              value={weight()}
              onChange={(e) => setWeight(e.currentTarget.value as IconWeight)}
            >
              <For each={WEIGHTS}>{(w) => <option value={w}>{w}</option>}</For>
            </select>
          </label>

          <label class="field">
            <span>Animation</span>
            <select
              value={animate()}
              onChange={(e) => setAnimate(e.currentTarget.value as IconAnimation | "none")}
            >
              <For each={ANIMATIONS}>{(a) => <option value={a}>{a}</option>}</For>
            </select>
          </label>
        </section>

        <main class="grid" aria-label="Icon gallery">
          <For each={filtered()}>
            {([name, Icon]) => (
              <button
                type="button"
                class="card"
                title={`Copy import for ${name}`}
                onClick={() => copyImport(name)}
              >
                <span class="card__icon">
                  <Icon
                    weight={weight()}
                    animate={animate() === "none" ? undefined : animate()}
                    title={name}
                  />
                </span>
                <span class="card__name">{name}</span>
                <span class="card__copy">
                  <Show
                    when={copied() === name}
                    fallback={
                      <>
                        <FiCopy size={14} /> Copy
                      </>
                    }
                  >
                    <FiCheck size={14} /> Copied
                  </Show>
                </span>
              </button>
            )}
          </For>

          <Show when={filtered().length === 0}>
            <p class="empty">No icons match “{query()}”.</p>
          </Show>
        </main>

        <footer class="footer">
          Showing {filtered().length} of {ICONS.length} curated Feather icons. The full set ships
          287 tree-shakeable modules.
        </footer>
      </div>
    </IconContext.Provider>
  );
}
