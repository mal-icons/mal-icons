import {
  ICON_ANIMATIONS_CSS,
  type IconAnimation,
  type WEIGHT_STROKE_WIDTH,
  defineMalIcon,
  registerIcons,
} from "@mal-icons/web";
import { ICONS, ICON_NAMES } from "./icons.ts";
import "./styles.css";

type IconWeight = keyof typeof WEIGHT_STROKE_WIDTH;

const WEIGHTS: IconWeight[] = ["thin", "light", "regular", "bold"];
const ANIMATIONS: Array<IconAnimation | "none"> = ["none", "spin", "pulse", "beat", "bounce"];

// Register the curated set (plus the chrome icons) so `<mal-icons name="…">`
// resolves synchronously from the in-memory registry, then define the element.
registerIcons(ICONS);
defineMalIcon();

const app = document.getElementById("app");
if (!app) throw new Error("Root element #app not found");

const state = {
  size: 32,
  color: "#6366f1",
  weight: "regular" as IconWeight,
  animate: "none" as IconAnimation | "none",
  query: "",
};

/** Escape a value before interpolating it into an HTML string. */
function esc(value: string | number): string {
  return String(value).replace(
    /[&<>"']/g,
    (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] as string,
  );
}

function option(value: string, selected: boolean): string {
  return `<option value="${esc(value)}"${selected ? " selected" : ""}>${esc(value)}</option>`;
}

app.innerHTML = `
  <style>${ICON_ANIMATIONS_CSS}</style>
  <div class="page">
    <header class="hero">
      <div class="hero__badge">Web Components · Vite</div>
      <h1 class="hero__title">mal-icons <span>for the platform</span></h1>
      <p class="hero__subtitle">
        Framework-free icons rendered as a native <code>&lt;mal-icons&gt;</code> custom
        element — no virtual DOM, no <code>innerHTML</code>, every shape built with
        <code>createElementNS</code>.
      </p>
      <a class="hero__link" href="https://github.com/MAnasLatif/mal-icons" target="_blank" rel="noreferrer">
        <mal-icons name="FiGithub" size="18"></mal-icons> View on GitHub
      </a>
    </header>

    <section class="panel" aria-label="Icon controls">
      <label class="field field--search">
        <mal-icons name="FiSearch" size="18" class="field__icon"></mal-icons>
        <input id="q" type="search" placeholder="Search icons…" />
      </label>
      <label class="field">
        <span>Size · <span id="size-label">${esc(state.size)}</span>px</span>
        <input id="size" type="range" min="16" max="64" value="${esc(state.size)}" />
      </label>
      <label class="field">
        <span>Color</span>
        <input id="color" type="color" value="${esc(state.color)}" />
      </label>
      <label class="field">
        <span>Weight</span>
        <select id="weight">${WEIGHTS.map((w) => option(w, w === state.weight)).join("")}</select>
      </label>
      <label class="field">
        <span>Animation</span>
        <select id="animate">${ANIMATIONS.map((a) => option(a, a === state.animate)).join("")}</select>
      </label>
    </section>

    <main class="grid" aria-label="Icon gallery">
      ${ICON_NAMES.map(
        (name) => `
        <button type="button" class="card" data-name="${esc(name)}" title="Copy import for ${esc(name)}">
          <span class="card__icon">
            <mal-icons data-gallery name="${esc(name)}" title="${esc(name)}"></mal-icons>
          </span>
          <span class="card__name">${esc(name)}</span>
          <span class="card__copy">
            <mal-icons class="card__copy-icon" name="FiCopy" size="14"></mal-icons>
            <span class="card__copy-label">Copy</span>
          </span>
        </button>`,
      ).join("")}
      <p class="empty" hidden>No icons match the search.</p>
    </main>

    <footer class="footer">
      Showing <span id="count">${ICON_NAMES.length}</span> of ${ICON_NAMES.length} curated Feather
      icons. The full set ships 287 tree-shakeable JSON modules.
    </footer>
  </div>
`;

const $ = <T extends Element>(sel: string): T => {
  const el = app.querySelector<T>(sel);
  if (!el) throw new Error(`Missing element: ${sel}`);
  return el;
};

const galleryIcons = Array.from(app.querySelectorAll<HTMLElement>("mal-icons[data-gallery]"));
const cards = Array.from(app.querySelectorAll<HTMLButtonElement>(".card"));
const empty = $<HTMLParagraphElement>(".empty");
const count = $<HTMLSpanElement>("#count");

/** Push the current theming controls onto every gallery `<mal-icons>`. */
function applyTheme(): void {
  for (const icon of galleryIcons) {
    icon.setAttribute("size", String(state.size));
    icon.setAttribute("color", state.color);
    icon.setAttribute("weight", state.weight);
    if (state.animate === "none") icon.removeAttribute("animate");
    else icon.setAttribute("animate", state.animate);
  }
}

/** Filter the gallery by name. */
function applyFilter(): void {
  const q = state.query.trim().toLowerCase();
  let visible = 0;
  for (const card of cards) {
    const name = card.dataset.name ?? "";
    const match = !q || name.toLowerCase().includes(q);
    card.hidden = !match;
    if (match) visible++;
  }
  count.textContent = String(visible);
  empty.hidden = visible !== 0;
}

$<HTMLInputElement>("#size").addEventListener("input", (e) => {
  state.size = Number((e.target as HTMLInputElement).value);
  $<HTMLSpanElement>("#size-label").textContent = String(state.size);
  applyTheme();
});

$<HTMLInputElement>("#color").addEventListener("input", (e) => {
  state.color = (e.target as HTMLInputElement).value;
  applyTheme();
});

$<HTMLSelectElement>("#weight").addEventListener("change", (e) => {
  state.weight = (e.target as HTMLSelectElement).value as IconWeight;
  applyTheme();
});

$<HTMLSelectElement>("#animate").addEventListener("change", (e) => {
  state.animate = (e.target as HTMLSelectElement).value as IconAnimation | "none";
  applyTheme();
});

$<HTMLInputElement>("#q").addEventListener("input", (e) => {
  state.query = (e.target as HTMLInputElement).value;
  applyFilter();
});

for (const card of cards) {
  card.addEventListener("click", async () => {
    const name = card.dataset.name ?? "";
    await navigator.clipboard?.writeText(`import { ${name} } from "@mal-icons/web/fi";`);
    const icon = card.querySelector<HTMLElement>(".card__copy-icon");
    const label = card.querySelector<HTMLSpanElement>(".card__copy-label");
    icon?.setAttribute("name", "FiCheck");
    if (label) label.textContent = "Copied";
    window.setTimeout(() => {
      icon?.setAttribute("name", "FiCopy");
      if (label) label.textContent = "Copy";
    }, 1200);
  });
}

applyTheme();
