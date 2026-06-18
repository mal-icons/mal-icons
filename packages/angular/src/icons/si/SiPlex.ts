import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-plex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPlex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.99 8.41c-0.96 0-1.590.28-2.120.93v-0.72H0v8.88s0.040.020.130.04c0.140.030.820.19 1.33-0.250.44-0.380.54-0.810.54-1.32v-1.28c0.530.57 1.150.81 2 0.81 1.84 0 3.25-1.49 3.25-3.48 0-2.12-1.36-3.61-3.27-3.61Zm16.75 5.60.410.59c0.390.610.890.91 1.490.910.62-0.01 1.06-0.56 1.23-0.75 0 0-0.31-0.27-0.69-0.72-0.52-0.61-1.21-1.75-1.24-1.8l-1.2 1.78Zm-3.2-1.95c0-2.08-1.52-3.64-3.52-3.64s-3.47 1.59-3.47 3.57a3.48 3.48 0 0 0 3.51 3.52c1.41 0 2.63-0.84 3.25-2.29h-2.04l-0.090.09c-0.430.4-0.720.53-1.230.53-0.79 0-1.37-0.51-1.45-1.27h4.99c0.04-0.210.05-0.310.05-0.52Zm-7.67-0.22c0 0.770.11 1.70.87 2.72l0.060.07c-0.310.53-0.740.88-1.250.88-0.4 0-0.81-0.21-1.14-0.58a2.18 2.18 0 0 1-0.54-1.44V6.41H9.86l0 5.42Zm9.28 3.46h-2.39l2.25-3.33-2.25-3.33h2.39l2.25 3.34-2.25 3.33Zm1.59-1.29Zm-17.16-0.34c-0.93 0-1.68-0.77-1.68-1.72s0.76-1.67 1.68-1.67c0.92 0 1.680.73 1.68 1.68 0 0.95-0.73 1.71-1.68 1.71Zm18.36-1.97L24 8.62h-2.39l-0.87 1.29 1.2 1.77Zm-9.4-0.47c0.16-0.710.72-1.13 1.49-1.130.77 0 1.370.47 1.51 1.13h-3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPlex;
