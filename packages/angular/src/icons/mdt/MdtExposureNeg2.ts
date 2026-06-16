import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-exposure-neg-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtExposureNeg2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.98 10.1c-0.140.25-0.320.53-0.560.83-0.230.3-0.520.65-0.88 1.03l-4.17 4.55V18H21v-1.71h-5.95l2.86-3.07c0.38-0.390.72-0.79 1.04-1.18s0.59-0.780.82-1.17c0.23-0.390.41-0.780.54-1.170.13-0.390.19-0.790.19-1.18 0-0.53-0.09-1.02-0.27-1.46s-0.44-0.81-0.78-1.11c-0.34-0.31-0.77-0.54-1.26-0.71A5.72 5.72 0 0 0 16.47 5c-0.69 0-1.310.11-1.850.32-0.540.21-1 0.51-1.360.88-0.370.37-0.650.8-0.84 1.3-0.180.47-0.270.97-0.28 1.5h2.14c0.01-0.310.05-0.60.13-0.870.09-0.290.23-0.540.4-0.750.18-0.210.41-0.370.68-0.490.27-0.120.6-0.180.96-0.180.31 0 0.580.050.810.15s0.430.250.590.43c0.160.180.280.40.370.650.080.250.130.520.130.81 0 0.22-0.030.43-0.080.65-0.060.22-0.150.45-0.290.7zM2 11h8v2H2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtExposureNeg2;
