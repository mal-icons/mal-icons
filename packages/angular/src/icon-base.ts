import {
  ChangeDetectionStrategy,
  Component,
  type ElementRef,
  Inject,
  Input,
  type OnChanges,
  type Renderer2,
} from "@angular/core";
import { type NodeTuple, resolveIconAttrs } from "@mal-icon/core";
import { type AngularIconContextValue, ICON_CONTEXT } from "./context.ts";

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * The shared SVG wrapper. Reads theming from the injected {@link ICON_CONTEXT},
 * applies the SRS override priority, and builds a native `<svg>` element with
 * `Renderer2` — no `innerHTML`, no runtime string parsing.
 */
@Component({
  selector: "mal-icon",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "",
})
export class IconBaseComponent implements OnChanges {
  @Input() viewBox = "0 0 24 24";
  @Input() nodes: NodeTuple[] = [];
  @Input() defaultAttr: Record<string, unknown> = {};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;

  private svg?: SVGSVGElement;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Inject(ICON_CONTEXT) private readonly ctx: AngularIconContextValue,
  ) {}

  ngOnChanges(): void {
    this.build();
  }

  private build(): void {
    if (this.svg) {
      this.renderer.removeChild(this.host.nativeElement, this.svg);
      this.svg = undefined;
    }

    const { size, color, className } = resolveIconAttrs(
      { size: this.size, color: this.color, className: this.className },
      this.ctx,
    );

    const svg = this.renderer.createElement("svg", SVG_NS) as SVGSVGElement;
    this.renderer.setAttribute(svg, "viewBox", this.viewBox);
    this.renderer.setAttribute(svg, "stroke", "currentColor");
    this.renderer.setAttribute(svg, "fill", "currentColor");
    this.renderer.setAttribute(svg, "stroke-width", "0");
    for (const [k, v] of Object.entries(this.defaultAttr)) {
      this.renderer.setAttribute(svg, k, String(v));
    }
    for (const [k, v] of Object.entries(this.ctx.attr ?? {})) {
      this.renderer.setAttribute(svg, k, String(v));
    }
    this.renderer.setAttribute(svg, "width", String(size));
    this.renderer.setAttribute(svg, "height", String(size));
    if (color) this.renderer.setStyle(svg, "color", color);
    if (className) this.renderer.setAttribute(svg, "class", className);

    if (this.title) {
      this.renderer.setAttribute(svg, "role", "img");
      const title = this.renderer.createElement("title", SVG_NS);
      this.renderer.appendChild(title, this.renderer.createText(this.title));
      this.renderer.appendChild(svg, title);
    } else {
      this.renderer.setAttribute(svg, "role", "presentation");
      this.renderer.setAttribute(svg, "aria-hidden", "true");
    }

    for (const [tag, attr] of this.nodes) {
      const el = this.renderer.createElement(tag, SVG_NS);
      for (const [k, v] of Object.entries(attr)) this.renderer.setAttribute(el, k, String(v));
      this.renderer.appendChild(svg, el);
    }

    this.renderer.appendChild(this.host.nativeElement, svg);
    this.svg = svg;
  }
}
