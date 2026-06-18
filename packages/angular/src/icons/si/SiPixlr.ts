import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pixlr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPixlr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.26 14.39a17.7 17.7 0 0 1-2.64-0.3A16.02 16.02 0 0 1 0 11.82v0.28c0 6.05 4.48 11.04 10.31 11.85a48.57 48.57 0 0 1-1.81-7.82c-0.07-0.55-0.16-1.13-0.24-1.75Zm6.28-4.63c0.37-0.420.61-0.940.69-1.490.02-0.120.03-0.240.03-0.34a2 2 0 0 0-0.24-1.02 1.34 1.34 0 0 0-0.66-0.63c-1.19-0.58-2.610.66-3.12 1.69 0 0 0 0.01-0.010.01-0.72 1.36-0.52 3.54-0.52 3.54a8.27 8.27 0 0 0 2.93-1.03c0.33-0.190.64-0.430.91-0.73zM12 0.05C6.490.05 1.85 3.770.46 8.85c0.110.130.640.430.730.490.250.160.520.330.790.49 1.110.65 2.9 1.47 5.16 1.750.310.060.640.070.960.07 0-0.12-0.01-0.24-0.01-0.36-0.01-0.580.02-1.180.07-1.760.03-0.240.05-0.460.09-0.70.02-0.040.02-0.10.03-0.15v-0.04c0.37-2 1.42-3.78 3.36-4.65 2-0.88 4.29-0.52 5.55 1.36a5.22 5.22 0 0 1-0.12 5.48c-1.31 2.05-3.63 3.03-6.07 3.36a44.26 44.26 0 0 0 0.64 4.04 48.25 48.25 0 0 0 0.88 3.51c0.020.060.030.120.060.180.190.670.42 1.350.64 2C19.28 23.33 24 18.22 24 12.02 23.97 5.41 18.610.05 12 0.05"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPixlr;
