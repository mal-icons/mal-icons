import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-apple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsApple {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.180.01C11.15-0.03 9.920.02 8.86 1.18c-1.07 1.16-0.9 2.48-0.88 2.52s1.520.09 2.48-1.260.76-2.390.73-2.43m3.31 11.73c-0.05-0.1-2.33-1.23-2.11-3.42s1.68-2.79 1.7-2.85-0.6-0.79-1.25-1.16a3.7 3.7 0 0 0-1.56-0.43c-0.110-0.48-0.09-1.250.12-0.510.14-1.650.59-1.970.61-0.320.02-1.26-0.52-2.27-0.66-0.65-0.12-1.330.13-1.820.33-0.490.2-1.420.75-2.07 2.24-0.65 1.48-0.31 3.83-0.07 4.56s0.63 1.92 1.27 2.8c0.580.98 1.34 1.67 1.66 1.9s1.220.39 1.840.07c0.5-0.31 1.41-0.48 1.77-0.470.360.01 1.060.15 1.780.540.570.2 1.110.12 1.65-0.10.54-0.22 1.32-1.06 2.24-2.76q0.52-1.180.47-1.28"}],["path",{"d":"M11.180.01C11.15-0.03 9.920.02 8.86 1.18c-1.07 1.16-0.9 2.48-0.88 2.52s1.520.09 2.48-1.260.76-2.390.73-2.43m3.31 11.73c-0.05-0.1-2.33-1.23-2.11-3.42s1.68-2.79 1.7-2.85-0.6-0.79-1.25-1.16a3.7 3.7 0 0 0-1.56-0.43c-0.110-0.48-0.09-1.250.12-0.510.14-1.650.59-1.970.61-0.320.02-1.26-0.52-2.27-0.66-0.65-0.12-1.330.13-1.820.33-0.490.2-1.420.75-2.07 2.24-0.65 1.48-0.31 3.83-0.07 4.56s0.63 1.92 1.27 2.8c0.580.98 1.34 1.67 1.66 1.9s1.220.39 1.840.07c0.5-0.31 1.41-0.48 1.77-0.470.360.01 1.060.15 1.780.540.570.2 1.110.12 1.65-0.10.54-0.22 1.32-1.06 2.24-2.76q0.52-1.180.47-1.28"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsApple;
