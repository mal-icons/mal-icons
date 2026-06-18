import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zcool",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZcool {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.470.44c-0.1-0.01-0.160.03-0.20.12-0.58 1.4-1.6 2.45-3.07 3.16-0.690.33-1.330.56-1.920.67-1.050.2-1.970.41-2.760.63C3.44 6.140.2 9.20.01 13.59c-0.09 2.150.46 4.1 1.66 5.85 2.83 4.13 8.45 5.38 12.72 2.73 2.28-1.42 3.73-3.48 4.36-6.19a0.150.15 84 0 1 0.08-0.1c0.28-0.130.58-0.230.86-0.37 2.08-1.07 3.52-2.72 4.3-4.96a0.180.18 13.8 0 0-0.14-0.240.250.25 0 0 0-0.130.01c-0.940.33-1.910.55-2.910.67a0.030.03 0 0 1-0.03-0.05c1.98-2.68 2.91-5.72 2.8-9.110-0.1-0.05-0.16-0.15-0.19a0.180.17 28.9 0 0-0.170.05c-2.14 2.29-4.71 3.69-7.71 4.18-0.080.01-0.1-0.02-0.06-0.090.81-1.590.77-3.620.14-5.23a0.20.2 0 0 0-0.16-0.12zm-2.15 13.2c0.1-0.010.120.060.050.21a6.62 6.62 0 0 1-1.26 2c-0.880.96-1.97 1.34-3.26 1.14a2.95 2.95 0 0 1-1.86-1.110.090.09 0 0 1 0-0.110.150.15 0 0 1 0.11-0.06c2.18-0.2 4.07-1.12 6.09-2.03a0.460.46 0 0 1 0.12-0.04zm-12.230.62c0.040.010.10.040.180.110.740.62 1.68 1.21 2.64 1.3a0.120.12 0 0 1 0.10.17c-0.56 1.11-1.660.87-2.280.03a4.22 4.22 0 0 1-0.66-1.36c-0.05-0.17-0.04-0.250.03-0.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZcool;
