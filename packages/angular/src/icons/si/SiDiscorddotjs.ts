import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-discorddotjs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDiscorddotjs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.43 5.01c-1.59 0-2.910.61-3.7 1.56h00a3.45 3.45 0 0 0-0.81 2.4c0.06 1.490.92 2.42 1.92 3.02a6.32 6.32 0 0 0 0.80.4l1.830.8c0.990.41 1.740.72 2 1.390.070.170.10.360.10.59 0 1.05-0.84 1.73-2.35 1.73-1.26 0-2.56-0.62-3.52-1.52l-1.11 1.31-0.270.32a6.93 6.93 0 0 0 4.84 1.98c2.44 0 4.09-1.18 4.64-2.78A3.75 3.75 0 0 0 24 14.99c0-0.33-0.03-0.63-0.09-0.91-0.23-1.07-0.88-1.79-1.78-2.32a7.17 7.17 0 0 00 0 7.17 7.17 0 0 0-0.84-0.42l-1.81-0.76c-0.89-0.36-1.74-0.69-2.03-1.35a1.32 1.32 0 0 1-0.11-0.55c0-0.990.82-1.59 2.1-1.59 1.15 0 2.080.43 2.93 1.15l0.9-1.110.34-0.42a5.96 5.96 0 0 0-4.16-1.71ZM0 5.01v10.31h3.9c1.02 0 1.81-0.16 2.54-0.53a2.15 2.15 0 0 1 2.25-2.22c0.37-0.750.52-1.50.52-2.49 0-1.02-0.19-1.9-0.57-2.67a4.28 4.28 0 0 0-1.74-1.77c-0.77-0.43-1.69-0.63-2.8-0.63Zm10.73 0v9.71c0 1.19-0.96 2.15-2.14 2.15a2.14 2.14 0 0 1-1.82-1.01l-0.210.09a7.53 7.53 0 0 1-0.620.24 6.85 6.85 0 0 1-1.110.24c0.42 1.34 2.06 2.66 3.97 2.54 1.8 0 3.05-0.89 3.72-2.180.37-0.720.56-1.570.56-2.45V5.01Zm-8.25 2.21h1.49c0.87 0 1.530.25 1.980.770.440.520.66 1.220.66 2.14 0 0.93-0.24 1.65-0.69 2.18-0.460.55-1.130.81-2.030.81H2.48Zm6.11 6.14a1.36 1.36 0 1 0 0 2.71 1.36 1.36 0 0 0 0-2.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDiscorddotjs;
