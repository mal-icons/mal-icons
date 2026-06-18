import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hilton",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHilton {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 7.54v8.91h24V7.54H0zm23.59 8.5H0.41V7.95h23.18v8.1zM3.68 14.41h-1.62v-0.25l0.32-0.04V9.87l-0.32-0.04v-0.24h1.62v0.24l-0.320.05v1.81h2.11V9.87l-0.35-0.04v-0.24h1.65v0.24l-0.330.05v4.24l0.330.04v0.25H5.11v-0.25l0.36-0.04v-1.93H3.36v1.93l0.320.04v0.25zm5.3 0H7.47v-0.22l0.31-0.04V11.24l-0.31-0.04v-0.22h1.2v3.17l0.310.05v0.22zm2.170H9.64v-0.21l0.3-0.04V9.85l-0.3-0.04V9.59h1.2v4.57l0.310.04v0.22zm0.94-3.12h-0.63v-0.32h0.66v-0.72l0.88-0.26v0.98h0.81v0.32h-0.81v2.04c0 0.530.110.70.590.70.18 0 0.33 0 0.48-0.04v0.24c-0.440.15-0.80.22-1.110.22-0.7 0-0.86-0.31-0.86-0.91v-2.24zm3.92 3.21c1.14 0 1.86-0.71 1.86-1.79 0-1.18-0.68-1.84-1.8-1.84-1.14 0-1.860.74-1.86 1.84 0 1.320.7 1.79 1.8 1.79zm0.02-3.36c0.53 0 0.850.470.85 1.56 0 1.11-0.3 1.54-0.85 1.54-0.51 0-0.83-0.45-0.83-1.54 0-1.10.32-1.560.84-1.56zm3.72 3.26h-1.52v-0.22l0.31-0.04v-2.88l-0.31-0.04v-0.24h1.21v0.48c0.38-0.30.74-0.54 1.25-0.540.68 0 0.980.40.98 1.17v2.07l0.310.04v0.22h-1.51v-0.22l0.3-0.04v-1.95c0-0.54-0.2-0.78-0.61-0.78-0.19 0-0.490.13-0.720.29v2.45l0.310.05v0.22zM7.74 10.07a0.490.49 0 0 1 0.98 0 0.490.49 0 0 1-0.490.490.490.49 0 0 1-0.49-0.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHilton;
