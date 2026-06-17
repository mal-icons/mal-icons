import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-telegram",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTelegram {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.29 5.91q-1.170.49-4.67 2.01-0.570.23-0.590.44c-0.030.240.280.340.690.47l0.180.06c0.410.130.960.29 1.240.29q0.390.010.87-0.32 3.27-2.21 3.37-2.23c0.05-0.010.12-0.030.170.02s0.040.120.040.14c-0.030.13-1.23 1.24-1.85 1.82-0.190.18-0.330.31-0.360.34a8 8 0 0 1-0.190.19c-0.380.37-0.660.640.02 1.090.330.220.590.390.850.570.280.190.570.390.940.63q0.140.090.270.19c0.330.240.630.4510.410.21-0.020.44-0.220.55-0.820.27-1.420.79-4.490.91-5.75a1.4 1.4 0 0 0-0.01-0.310.340.34 0 0 0-0.11-0.220.530.53 0 0 0-0.31-0.09c-0.30.01-0.760.17-2.98 1.09"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTelegram;
