import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-freenet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFreenet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.33 6.18c-0.77-0.17-1.58-0.48-4.27-1.88C1.48 2.470.69 2.330.23 3.08c-0.620.99-0.05 3.51 2.42 8.1 1.59 3.02 4.11 6.9 4.57 7.420.10.10.220.140.330.070.1-0.070.15-0.150.07-0.31-0.38-0.7-1.68-3.41-2.28-4.81-1.4-3.39-1.73-4.54-1.25-4.80.14-0.070.31-0.020.70.21 1.350.72 4.33 3.02 4.87 4.630.220.70.34 1.510.39 4.390.07 3.790.34 4.49 1.27 4.49 1.23 0 3.29-1.71 6.36-6 2.02-2.81 4.39-6.77 4.63-7.40.07-0.14 0-0.24-0.09-0.31-0.1-0.07-0.22-0.05-0.310.09-0.460.65-2.33 3.07-3.36 4.25-2.45 2.81-3.34 3.63-3.84 3.38-0.14-0.07-0.17-0.24-0.17-0.65 0-1.470.63-5.02 1.87-6.220.53-0.53 1.25-1.03 3.91-2.5 3.51-1.95 4.01-2.52 3.55-3.29-0.62-0.99-3.22-1.8-8.77-2.12-3.61-0.22-8.5-0.14-9.2-0.02-0.150.02-0.220.1-0.240.22 0 0.10.070.210.240.210.840.05 4.030.34 5.640.56 3.860.55 5.090.87 5.09 1.41 0 0.14-0.140.26-0.530.46-1.390.79-5.02 2.04-6.75 1.66"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFreenet;
