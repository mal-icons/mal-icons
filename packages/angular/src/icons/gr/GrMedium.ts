import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-medium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrMedium {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M6.78 5a6.78 6.78 0 1 0 0 13.57A6.78 6.78 0 0 0 6.78 5Zm10.70.52c-1.87 0-3.39 2.8-3.39 6.26 0 0.650.05 1.270.15 1.860.130.780.35 1.50.62 2.120.140.310.290.590.460.850.340.510.720.9 1.15 1.150.320.180.660.28 1.010.28s0.69-0.1 1.01-0.28c0.43-0.240.81-0.64 1.15-1.150.17-0.250.32-0.540.46-0.850.28-0.620.49-1.340.62-2.120.1-0.590.15-1.210.15-1.86 0-3.46-1.52-6.26-3.39-6.26Zm5.220.52c-0.14 0-0.270.09-0.390.26-0.080.11-0.160.26-0.230.43a4.01 4.01 0 0 0-0.110.29c-0.070.21-0.130.44-0.190.7-0.120.52-0.21 1.14-0.28 1.83a22.61 22.61 0 0 0-0.1 2.23 24.5 24.5 0 0 0 0.1 2.23c0.070.690.16 1.310.28 1.820.060.260.120.50.190.70.030.10.070.20.110.290.070.180.150.320.230.440.120.170.250.260.390.260.72 0 1.3-2.57 1.3-5.74 0-3.17-0.58-5.74-1.3-5.74Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrMedium;
