import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-scipy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiScipy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.7 13.5c-0.78-1.07-1.98-1.52-3.69-1.88l-1.59-0.37-1.2-0.51c-0.63-0.45-1.17-1.63-1.02-2.68a3 3 0 0 1 3.39-2.53 2.96 2.96 0 0 1 1.96 1.16L15.35 9.05c1.03 1.33 2.19 1.73 3.46 1.1l0.64-0.27a0.220.22 0 0 1 0.280.09l0.130.19a0.310.31 0 0 0 0.160.130.330.33 0 0 0 0.33-0.06l1.47-1.38c0.26-0.220.18-0.420.18-0.42l-0.35-0.81s-0.1-0.19-0.43-0.15l-1.970.18a0.330.33 0 0 0-0.270.41l0.070.23c0.010.050.010.100.15a0.220.22 0 0 1-0.120.13l-0.560.24c-0.580.34-1.240.12-1.69-0.42l-0.5-0.67-1.44-1.91a4.42 4.42 0 0 0-2.93-1.72C9.36 3.73 7.1 5.42 6.74 7.84c-0.18 1.220.19 2.380.86 3.30.490.67 1.37 1.06 1.85 1.18l1.260.36 1.210.28c0.170.040.630.160.910.260.260.090.850.31 1.320.70.570.580.88 1.410.75 2.28a2.74 2.74 0 0 1-4.9 1.25l-1.73-2.29a2.29 2.29 0 0 0-1.51-0.89 2.31 2.31 0 0 0-1.710.44l-3.63 2.71A11 11 0 0 1 0 12C0 5.8 5.130.77 11.470.77c4.72 0 8.76 2.79 10.52 6.77l0.58-0.270.39-1.070.410.14-0.350.960.980.34-0.150.4-1.09-0.38-0.60.28c0.5 1.260.78 2.630.78 4.07 0 6.2-5.13 11.23-11.47 11.23a11.53 11.53 0 0 1-9.26-4.61l3.72-2.79a0.860.86 0 0 1 1.160.19l1.83 2.46a4.19 4.19 0 0 0 2.67 1.5c2.30.32 4.44-1.27 4.77-3.56a4.14 4.14 0 0 0-0.66-2.92"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiScipy;
