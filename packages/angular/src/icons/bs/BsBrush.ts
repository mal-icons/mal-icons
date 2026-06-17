import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-brush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBrush {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.830.12a0.50.5 0 0 1 0.130.58c-1.53 3.43-4.74 8.17-7.09 10.64a6.1 6.1 0 0 1-2.37 1.53c-0.020.23-0.060.54-0.160.87-0.20.66-0.67 1.48-1.71 1.74a8.1 8.1 0 0 1-3.080.13 4 4 0 0 1-0.56-0.13 1.4 1.4 0 0 1-0.47-0.250.70.7 0 0 1-0.2-0.290.620.62 0 0 1 0-0.44c0.1-0.240.32-0.380.46-0.450.39-0.20.63-0.450.87-0.830.1-0.140.18-0.30.29-0.47l0.12-0.2c0.15-0.250.33-0.540.55-0.850.53-0.74 1.2-0.92 1.75-0.9q0.190.010.350.05c0.06-0.170.14-0.380.24-0.610.26-0.620.66-1.42 1.19-2.07 2.18-2.67 6.18-6.21 9.12-8.1a0.50.5 0 0 1 0.60.04M4.71 11.91a1.2 1.2 0 0 0-0.42-0.1c-0.25-0.01-0.570.05-0.880.48-0.20.28-0.350.53-0.50.78l-0.10.18c-0.110.18-0.210.36-0.320.53a3.4 3.4 0 0 1-0.760.86c0.690.11 1.740.11 2.66-0.120.56-0.140.84-0.570.99-1.06a3 3 0 0 0 0.13-0.75zm1.440.03c0.12-0.040.28-0.10.46-0.18a5.1 5.1 0 0 0 1.54-1.1c1.9-2 4.41-5.57 6.05-8.63-2.59 1.93-5.57 4.66-7.3 6.79-0.440.54-0.79 1.24-1.04 1.83-0.120.29-0.210.54-0.280.72v0l0.570.57zm-4.97 3.040.010zm3.58-3.0400h0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBrush;
