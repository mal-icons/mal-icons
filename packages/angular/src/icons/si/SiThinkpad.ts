import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-thinkpad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiThinkpad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7.89a0.680.68 0 0 0-0.11 1.050.70.7 0 0 0 1.07-0.10.680.68 0 0 0 0.12-0.38l00a0.680.68 0 0 0-0.2-0.480.70.7 0 0 0-0.87-0.08zm10.240.4a1.27 1.27 0 0 0-0.88-0.34h-1.47v8.2h1.15v-3.56h0.32c0.68 0 1.27-0.68 1.27-1.34l0-2.11a1.22 1.22 0 0 0-0.39-0.85zm-0.65 3.05c0 0.33-0.280.33-0.540.33V8.87h0.16c0.3 0 0.380.20.380.71v1.77zm4.16 4.8l00h0zm-1.38-6.67c-0.85 0-1.380.41-1.38 1.1v1.28h1.08v-0.93c0.01-0.29-0.02-0.710.31-0.710.31 0 0.260.510.260.72 0 1.64-1.65 1.02-1.65 2.31v2.21c0 0.50.250.760.760.760.42 0 0.61-0.140.86-0.53h0.07a0.980.98 0 0 0 0.070.45h1.02v-5.56c0-0.68-0.54-1.11-1.38-1.11zm0.3 5.56a0.320.32 0 0 1-0.320.290.30.3 0 0 1-0.11-0.010.290.29 0 0 1-0.16-0.130.260.26 0 0 1-0.03-0.1v-1.71c0-0.330.29-0.520.61-0.69h0v2.36zm3.27-7.11v2.04h-0.03a1.05 1.05 0 0 0-0.84-0.5c-0.43 0-0.810.25-0.810.72v5.25c-0.010.550.370.780.810.780.32-0.040.61-0.210.8-0.48h0.07v0.4H24V7.93h-1.06zm0 6.99c-0.010.35-0.150.41-0.330.41-0.16 0-0.29-0.1-0.29-0.41v-4.17c0-0.260.1-0.380.29-0.380.16 0 0.310.040.330.39v4.16zM0 8.95h1.09v7.17h1.18V8.95h1.08V7.92H0zm5.50.52a0.840.84 0 0 0-0.80.48h-0.05V7.91H3.6v8.22h1.06v-5.39c0-0.170.05-0.380.32-0.380.25 0 0.30.170.30.39v5.38H6.35v-5.6c0-0.69-0.12-1.06-0.85-1.06zm1.350.08h1.06v6.58h-1.06zm3.45-0.07a0.880.88 0 0 0-0.80.47h-0.04v-0.39H8.4v6.58h1.05v-5.33c0-0.180.01-0.430.34-0.430.25 0 0.280.220.280.43v5.34h1.07v-5.5c0-0.690.01-1.16-0.85-1.16zm4.190.08H13.43l-0.61 3.03h-0.1V7.93h-1.06v8.22h1.07v-3.48h0.1l0.62 3.48h1.09l-0.68-3.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiThinkpad;
