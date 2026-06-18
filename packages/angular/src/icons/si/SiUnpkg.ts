import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-unpkg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUnpkg {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0H0zm4.32 2.98 4.370a0.040.04 0 0 1 0.040.04 9542.6 9542.6 0 0 1 0 9.16c0 0.750.03 1.40.09 1.960.040.340.130.680.29 1.030.340.770.91 1.24 1.72 1.410.630.13 1.260.13 1.89-0.01 1.17-0.25 1.81-1.27 1.96-2.40.07-0.510.1-1.190.1-2.020-3.150-6.190-9.12 0-0.030.02-0.050.05-0.05h4.34a0.030.03 0 0 1 0.030.03v9.87c0 1.47-0.17 2.92-0.75 4.23-0.78 1.78-2.32 2.84-4.19 3.21-1.70.34-3.390.34-5.07-0.01-2.23-0.46-3.81-1.83-4.46-4.03-0.25-0.85-0.39-1.71-0.42-2.59a65.22 65.22 0 0 1-0.03-1.88c0-3.040-5.97 0-8.8 0-0.020.01-0.040.04-0.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUnpkg;
