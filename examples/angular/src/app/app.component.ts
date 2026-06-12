import { NgComponentOutlet } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { animationClass, ICON_ANIMATIONS_CSS, type IconAnimation } from "@mal-icons/angular";
import { FiCheck, FiCopy, FiGithub, FiSearch, ICONS } from "./icons";

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

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgComponentOutlet, FiGithub, FiSearch, FiCopy, FiCheck],
  template: `
    <div class="page">
      <header class="hero">
        <div class="hero__badge">Angular 22 · Vite</div>
        <h1 class="hero__title">mal-icons <span>for Angular</span></h1>
        <p class="hero__subtitle">
          Tree-shakeable, ahead-of-time generated standalone components. Each icon builds a
          native &lt;svg&gt; with Renderer2 — no innerHTML, no runtime string parsing.
        </p>
        <a
          class="hero__link"
          href="https://github.com/MAnasLatif/mal-icons"
          target="_blank"
          rel="noreferrer"
        >
          <mal-fi-github [size]="18" /> View on GitHub
        </a>
      </header>

      <section class="panel" aria-label="Icon controls">
        <label class="field field--search">
          <mal-fi-search [size]="18" className="field__icon" />
          <input
            type="search"
            placeholder="Search icons…"
            [value]="query()"
            (input)="query.set($any($event.target).value)"
          />
        </label>

        <label class="field">
          <span>Size · {{ size() }}px</span>
          <input
            type="range"
            min="16"
            max="64"
            [value]="size()"
            (input)="size.set(+$any($event.target).value)"
          />
        </label>

        <label class="field">
          <span>Color</span>
          <input
            type="color"
            [value]="color()"
            (input)="color.set($any($event.target).value)"
          />
        </label>

        <label class="field">
          <span>Animation</span>
          <select [value]="animate()" (change)="animate.set($any($event.target).value)">
            @for (a of animations; track a) {
              <option [value]="a">{{ a }}</option>
            }
          </select>
        </label>
      </section>

      <main class="grid" aria-label="Icon gallery">
        @for (entry of filtered(); track entry[0]) {
          <button
            type="button"
            class="card"
            [title]="'Copy import for ' + entry[0]"
            (click)="copyImport(entry[0])"
          >
            <span class="card__icon">
              <ng-container
                *ngComponentOutlet="entry[1]; inputs: inputsFor(entry[0])"
              ></ng-container>
            </span>
            <span class="card__name">{{ entry[0] }}</span>
            <span class="card__copy">
              @if (copied() === entry[0]) {
                <mal-fi-check [size]="14" /> Copied
              } @else {
                <mal-fi-copy [size]="14" /> Copy
              }
            </span>
          </button>
        }

        @if (filtered().length === 0) {
          <p class="empty">No icons match “{{ query() }}”.</p>
        }
      </main>

      <footer class="footer">
        Showing {{ filtered().length }} of {{ total }} curated Feather icons. The full set ships
        287 tree-shakeable standalone components.
      </footer>
    </div>
  `,
})
export class AppComponent {
  readonly animations = ANIMATIONS;
  readonly total = ICONS.length;

  readonly size = signal(32);
  readonly color = signal("#6366f1");
  readonly animate = signal<IconAnimation | "none">("none");
  readonly query = signal("");
  readonly copied = signal<string | null>(null);

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter(([name]) => name.toLowerCase().includes(q));
  });

  constructor() {
    // Animations are pure CSS; inject the keyframes once.
    const style = document.createElement("style");
    style.textContent = ICON_ANIMATIONS_CSS;
    document.head.appendChild(style);
  }

  /** Build the `@Input` bag for a gallery icon (props override any context). */
  inputsFor(name: string): Record<string, unknown> {
    const animate = this.animate();
    return {
      size: this.size(),
      color: this.color(),
      title: name,
      className: animate === "none" ? undefined : animationClass(animate),
    };
  }

  async copyImport(name: string): Promise<void> {
    await navigator.clipboard?.writeText(`import { ${name} } from "@mal-icons/angular/fi";`);
    this.copied.set(name);
    window.setTimeout(() => {
      if (this.copied() === name) this.copied.set(null);
    }, 1200);
  }
}
