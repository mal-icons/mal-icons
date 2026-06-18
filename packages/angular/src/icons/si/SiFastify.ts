import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fastify",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFastify {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.25 6.49L24 4.53l-0.03-0.12-7.47 1.97c0.8-1.150.52-2.080.52-2.08s-2.39 1.52-4.19 1.49c-1.8-0.04-2.39-0.52-5.150.36-2.770.88-3.55 3.59-4.35 4.17-0.80.58-3.32 2.48-3.32 2.48l0.010.03 2.27-0.72s-0.620.59-1.94 2.37l-0.06-0.0600.01s1.06 1.63 2.11 1.32a2.14 2.14 0 0 0 0.35-0.15c0.420.230.970.46 1.570.53 0 0-0.41-0.47-0.75-1.02l0.24-0.150.870.32-0.1-0.81c000.0100.01-0.01l0.850.31-0.1-0.74a5.65 5.65 0 0 1 0.32-0.16l0.89-3.34 3.66-2.5-0.290.73c-0.74 1.83-2.13 2.26-2.13 2.26l-0.580.22c-0.430.51-0.610.64-0.76 2.350.35-0.090.68-0.110.98-0.03 1.560.42 2.11 2.31 1.69 2.83-0.10.13-0.360.35-0.670.62H7.77l-0.010.51-0.060.05h-0.64l-0.010.5-0.170.13c-0.610.01-1.37-0.52-1.37-0.52 0 0.480.4 1.230.4 1.23l0.07-0.03-0.060.05s1.63 1.08 2.650.68c0.91-0.36 3.26-2.21 5.3-3.09l6.15-1.620.81-2.1-4.69 1.24v-1.89l5.5-1.450.81-2.1-6.31 1.66V8.37zm-11.16 4l1.46-0.380.020.07-0.45 1.18-1.510.4zm0.5 2.53l-1.510.40.49-1.27 1.46-0.380.020.07zm1.97-0.42l-1.510.40.49-1.27 1.46-0.380.020.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFastify;
