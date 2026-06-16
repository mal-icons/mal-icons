import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-storefront",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsStorefront {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.9 8.89 20.49 3H3.51L2.1 8.89c-0.24 1.02-0.02 2.060.62 2.880.080.110.190.190.280.29V21h18v-8.94c0.09-0.090.2-0.180.28-0.280.64-0.820.87-1.870.62-2.89zM7.02 5l-0.58 4.86c-0.080.65-0.6 1.14-1.21 1.14-0.49 0-0.8-0.29-0.93-0.47-0.26-0.33-0.35-0.76-0.25-1.17L5.09 5h1.93zm11.89 0 1.05 4.36c0.10.420.010.84-0.25 1.17-0.140.18-0.440.47-0.940.47-0.61 0-1.14-0.49-1.21-1.14L16.98 5h1.93zm-3.4 4.52c0.050.39-0.070.78-0.33 1.07-0.230.26-0.550.41-0.960.41-0.67 0-1.22-0.59-1.22-1.31V5h1.96l0.55 4.52zM11 9.69c0 0.72-0.55 1.31-1.29 1.31-0.34 0-0.65-0.15-0.89-0.41a1.42 1.42 0 0 1-0.33-1.07L9.04 5H11v4.69zM5 19v-6.03c0.080.010.150.030.230.030.87 0 1.66-0.36 2.24-0.950.60.6 1.40.95 2.310.950.87 0 1.65-0.36 2.23-0.930.590.57 1.390.93 2.290.930.84 0 1.64-0.35 2.24-0.950.580.59 1.370.95 2.240.950.08 0 0.15-0.020.23-0.03V19H5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsStorefront;
