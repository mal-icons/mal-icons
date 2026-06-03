// Curated Feather icons. Sprite symbol ids are kebab-cased: `fi-arrow-right`.
const ICONS = [
  "activity",
  "arrow-right",
  "bell",
  "calendar",
  "camera",
  "check",
  "cloud",
  "code",
  "download",
  "edit",
  "github",
  "globe",
  "heart",
  "home",
  "loader",
  "lock",
  "mail",
  "moon",
  "search",
  "settings",
  "star",
  "sun",
  "trash-2",
  "upload",
  "user",
  "zap",
];

const SVG_NS = "http://www.w3.org/2000/svg";

const grid = document.getElementById("grid");
const errorEl = document.getElementById("error");
const sizeInput = document.getElementById("size");
const sizeOut = document.getElementById("size-out");
const colorInput = document.getElementById("color");
const searchInput = document.getElementById("search");

/** Build one icon card referencing a sprite symbol via <use>. */
function makeCard(name) {
  const id = `fi-${name}`;
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.name = id;

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("width", "32");
  svg.setAttribute("height", "32");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", id);

  const use = document.createElementNS(SVG_NS, "use");
  use.setAttribute("href", `#${id}`);
  svg.appendChild(use);

  const label = document.createElement("span");
  label.className = "card__name";
  label.textContent = id;

  card.append(svg, label);
  return card;
}

function render() {
  grid.replaceChildren(...ICONS.map(makeCard));
  applySize(Number(sizeInput.value));
  applyColor(colorInput.value);
  applyFilter(searchInput.value);
}

function applySize(px) {
  sizeOut.textContent = String(px);
  for (const svg of grid.querySelectorAll("svg.icon")) {
    svg.setAttribute("width", String(px));
    svg.setAttribute("height", String(px));
  }
}

function applyColor(color) {
  grid.style.color = color; // icons use stroke:currentColor
}

function applyFilter(query) {
  const q = query.trim().toLowerCase();
  let visible = 0;
  for (const card of grid.querySelectorAll(".card")) {
    const match = card.dataset.name.includes(q);
    card.hidden = !match;
    if (match) visible += 1;
  }
  errorEl.hidden = visible !== 0;
  if (!errorEl.hidden) errorEl.textContent = `No icons match \u201C${query}\u201D.`;
}

/**
 * Load the generated sprite and inline it so same-document `<use href="#id">`
 * works. Inlining avoids cross-file `<use>` limitations when opened locally.
 */
async function loadSprite() {
  try {
    const res = await fetch("./fi.svg");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    document.getElementById("sprite-host").innerHTML = await res.text();
    render();
  } catch (err) {
    errorEl.hidden = false;
    errorEl.textContent =
      "Could not load fi.svg. Run the example over HTTP (see README) — opening " +
      "the file directly blocks fetch().";
    console.error(err);
  }
}

sizeInput.addEventListener("input", () => applySize(Number(sizeInput.value)));
colorInput.addEventListener("input", () => applyColor(colorInput.value));
searchInput.addEventListener("input", () => applyFilter(searchInput.value));

loadSprite();
