import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-piggy-bank",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPiggyBank {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 6.25a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0m1.14-1.5A6.6 6.6 0 0 1 7.96 4.5c0.67 0 1.30.1 1.890.27a0.50.5 0 0 0 0.29-0.96A7.6 7.6 0 0 0 7.96 3.5c-0.73 0-1.440.1-2.10.29a0.50.5 0 1 0 0.280.96"}],["path",{"fill-rule":"evenodd","d":"M7.96 1.53c-2.98 0-5.57 1.7-6.32 4.13h-0.55A1 1 0 0 0 0.11 6.82l0.25 1.46a1.5 1.5 0 0 0 1.48 1.24h0.26c0.30.510.690.98 1.15 1.38l-0.73 2.48a0.50.5 0 0 0 0.480.64h2a0.50.5 0 0 0 0.47-0.33l0.48-1.35c0.640.17 1.310.27 2.010.270.71 0 1.39-0.09 2.03-0.27l0.54 1.37a0.50.5 0 0 0 0.470.32h2a0.50.5 0 0 0 0.48-0.64l-0.76-2.51C13.81 9.9 14.5 8.56 14.5 7.07q0-0.22-0.02-0.43c0.26-0.110.51-0.270.71-0.440.320.310.820.310.82-0.42 0 0.22-0.50.22-0.46-0.03a1 1 0 0 0 0.09-0.250.70.7 0 0 0-0.2-0.640.580.58 0 0 0-0.71-0.10.740.74 0 0 0-0.370.56c-0.020.240.080.480.320.65a2 2 0 0 1-0.260.15c-0.53-2.66-3.28-4.59-6.44-4.59M2.52 6.26c0.46-2.07 2.67-3.73 5.45-3.73 3.15 0 5.54 2.11 5.54 4.54 0 1.25-0.62 2.41-1.67 3.25a0.50.5 0 0 0-0.160.54l0.66 2.17h-0.98l-0.59-1.49a0.50.5 0 0 0-0.63-0.29c-0.660.23-1.390.36-2.160.36a6.6 6.6 0 0 1-2.16-0.360.50.5 0 0 0-0.630.3l-0.52 1.47h-0.98l0.63-2.15a0.50.5 0 0 0-0.17-0.53 4.65 4.65 0 0 1-1.28-1.540.50.5 0 0 0-0.45-0.28h-0.56a0.50.5 0 0 1-0.49-0.41l-0.25-1.46h0.93a0.50.5 0 0 0 0.49-0.39m12.62-0.86a0.60.6 0 0 1-0.10.21l-0.04-0.02c-0.15-0.09-0.16-0.17-0.15-0.22a0.240.24 0 0 1 0.12-0.17c0.05-0.030.08-0.020.110.01a0.20.2 0 0 1 0.060.2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPiggyBank;
