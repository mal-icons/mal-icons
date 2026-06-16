import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zM7.64 14.47c0 0.29-0.240.53-0.530.53h-0.09c-0.29 0-0.53-0.24-0.53-0.53V10.5l-0.450.33a0.530.53 0 0 1-0.63-0.86l1.19-0.85a0.660.66 0 0 1 1.040.54v4.81zm5.370.53h-2.67c-0.4 0-0.72-0.32-0.72-0.72 0-0.190.08-0.380.21-0.510.95-0.95 1.58-1.58 1.92-1.940.4-0.420.54-0.690.54-1.06 0-0.4-0.31-0.72-0.81-0.72-0.34 0-0.570.16-0.720.37-0.150.2-0.410.26-0.640.16a0.550.55 0 0 1-0.22-0.85c0.15-0.190.37-0.380.67-0.530.69-0.33 1.48-0.2 1.950.030.860.440.91 1.240.91 1.48 0 0.64-0.31 1.26-0.92 1.86-0.250.25-0.720.71-1.4 1.39l0.030.05h1.88c0.27 0 0.490.220.490.49s-0.230.5-0.50.5zm5.74-0.85c-0.080.13-0.560.85-1.760.85-0.03 0-1.230.06-1.83-0.98-0.15-0.26-0.04-0.60.24-0.71l0.12-0.05c0.22-0.090.47-0.010.590.190.140.240.390.490.880.490.41 0 0.89-0.280.89-0.77 0-0.55-0.48-0.79-1.04-0.79a0.50.5 0 0 1-0.49-0.5c0-0.260.2-0.470.45-0.49v-0.01c0.33 0 0.88-0.140.88-0.72 0-0.39-0.31-0.65-0.75-0.65-0.32 0-0.530.13-0.670.3-0.140.18-0.370.26-0.580.17l-0.08-0.03c-0.3-0.12-0.4-0.5-0.2-0.750.27-0.350.76-0.7 1.54-0.7 1.09 0 1.540.64 1.620.750.330.50.28 1.160.02 1.57-0.150.22-0.320.38-0.520.48v0.07c0.280.110.510.280.680.520.370.520.33 1.270.01 1.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPin;
