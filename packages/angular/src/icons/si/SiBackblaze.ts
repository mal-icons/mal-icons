import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-backblaze",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBackblaze {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.310c0.65 1.35 1.57 4.08-1.39 7.17-1.81 1.88-3.08 3.85-2.35 6.060.36 1.1 1.19 2.51 2.89 2.790.610.1 1.340 1.74-0.14 2.45-0.85 2.1-3.41 1.55-5.05-0.07-0.21-0.19-0.73-0.24-0.92-0.37-1.60.78-2.66 1.13-3.80.03-0.090.05-0.180.07-0.270.04-0.210.07-0.420.08-0.64 0-1.83-0.99-2.63-1.78-3.6C10.180.56 9.310 9.310Zm6.28 6.02s-0.710.34-1.220.88c-0.450.48-0.860.88-1.29 1.86-0.030.14-0.050.29-0.070.44-0.23 1.64 1.15 3.140.72 5.19-0.110.54-0.360.71-0.78 1.64-0.51 1.11-0.38 2.590.36 3.530.670.85 1.88 1.23 3.050.95 2.11-0.5 3.06-2.28 2.9-4.29-0.13-1.58-0.82-2.75-2.75-4.96-0.96-1.09-1.61-2.41-1.56-3.410.14-1.210.66-1.830.66-1.83zM4.89 15.19c-0.020.01-0.040.06-0.060.16a0.050.05 0 0 1-0.010.02v0.01c-0.110.54-0.16 1.820.12 2.970.35 1.44 1.42 3.9 4.41 5.13 2.52 1.03 5.720.54 7.85-1.630.53-0.540.41-0.49-0.49-0.2v0c-1.110.36-3.520.55-4.77-1-1.52-1.89-0.43-3.36-1.36-3.15-3.620.83-5.27-1.47-5.55-2.100-0.09-0.25-0.15-0.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBackblaze;
