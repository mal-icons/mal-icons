import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-javascript",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlJavascript {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3h18v18H3V3zm16.52 13.71c-0.13-0.82-0.67-1.51-2.25-2.15-0.55-0.26-1.16-0.44-1.35-0.85-0.07-0.25-0.08-0.38-0.03-0.530.11-0.480.69-0.63 1.14-0.490.290.090.560.320.730.680.78-0.510.78-0.51 1.32-0.84-0.2-0.31-0.3-0.45-0.44-0.59-0.47-0.53-1.1-0.8-2.13-0.77l-0.530.07c-0.510.12-0.990.4-1.280.75-0.850.97-0.61 2.660.43 3.35 1.020.77 2.520.93 2.71 1.650.180.88-0.65 1.16-1.47 1.06-0.61-0.14-0.94-0.44-1.32-1l-1.370.79c0.160.360.340.520.610.83 1.31 1.32 4.57 1.25 5.15-0.750.02-0.070.18-0.530.06-1.24l0.030.05zm-6.74-5.43h-1.69c0 1.45-0.01 2.9-0.01 4.35 0 0.920.05 1.77-0.1 2.03-0.250.52-0.890.45-1.170.36-0.3-0.15-0.45-0.35-0.62-0.64-0.05-0.08-0.08-0.15-0.09-0.15l-1.370.84c0.230.470.560.880.99 1.140.640.38 1.50.51 2.40.310.59-0.17 1.1-0.52 1.36-1.060.38-0.70.3-1.550.3-2.510.01-1.54 0-3.08 0-4.63l0-0.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlJavascript;
