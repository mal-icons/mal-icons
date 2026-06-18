import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-b4x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiB4x {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.54 23.99c-6.26-0.45-10.82-3-13.57-7.57a13 13 0 0 1-0.81-1.57c0-0.09 7.73-14.24 7.76-14.22a2 2 0 0 1 0.070.46c0.080.930.37 2.340.71 3.36a14.8 14.8 0 0 0 2.04 3.97 4 4 0 0 0 0.370.46c0.030.020.220.230.420.460.20.240.490.550.650.71l0.30.28-0.32-0.35a19 19 0 0 1-0.6-0.7l-0.28-0.340.48-0.84 3.84-6.77c0.42-0.730.77-1.330.78-1.32a8 8 0 0 1-0.130.75c-0.66 3.29-0.5 6.260.48 8.730.160.420.52 1.160.56 1.160.02 0 0.26-0.430.55-0.96a1795 1795 0 0 1 4.13-7.59 1 1 0 0 1 0.13-0.2c0.01 0-0.070.24-0.170.53-0.57 1.59-0.94 3.1-1.13 4.63-0.090.75-0.08 2.490.03 3.190.29 1.90.95 3.46 2.03 4.740.360.430.790.830.950.890.050.020.070.060.060.09l-1.68 3.79A284 284 0 0 0 20.5 23.5c0 0.09-0.170.14-0.730.24-1.160.19-1.950.24-3.480.26-0.820.01-1.60-1.75-0.01"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiB4x;
