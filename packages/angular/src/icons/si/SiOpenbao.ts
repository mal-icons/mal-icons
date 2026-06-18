import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-openbao",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOpenbao {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4.63a3 3 0 0 0-0.310.02c-3.280.1-6.43 1.74-8.08 4.74a8.2 8.2 0 0 0-0.99 3.12C0.92 13.26 0 14.19 0 15.14c0 1.12 1.26 2.2 3.52 2.99 2.250.79 5.3 1.24 8.49 1.24s6.24-0.44 8.49-1.24S24 16.26 24 15.14c0-0.96-0.92-1.88-2.61-2.63a8.2 8.2 0 0 0-0.99-3.12c-1.66-3-4.81-4.64-8.08-4.74a3 3 0 0 0-0.31-0.02m0.9 2.090.040.02c0.350.20.690.490.740.550.320.380.74 1.090.74 1.47a0.90.9 0 0 0 1.79 0 3.24 3.24 0 0 0-0.32-1.39 7.2 7.2 0 0 1 2.95 2.89c0.68 1.230.9 2.630.75 3.61-0.080.49-0.240.85-0.42 1.05s-0.320.28-0.620.28H5.46c-0.3 0-0.45-0.08-0.62-0.28-0.17-0.2-0.34-0.56-0.42-1.05-0.15-0.970.07-2.380.75-3.6A7.2 7.2 0 0 1 8.12 7.37a3.24 3.24 0 0 0-0.32 1.390.90.9 0 0 0 1.79 0c0-0.380.42-1.090.74-1.47a3.7 3.7 0 0 1 0.78-0.57v2.04a0.90.9 0 1 0 1.79 0zm2.14 3.52a1.38 1.38 0 0 0-1.140.61c-0.210.31-0.280.560.150.830.280.170.610.110.80.020.12-0.060.17-0.110.39-0.010.440.20.70.190.95-0.020.28-0.240.24-0.580.02-0.83-0.31-0.36-0.72-0.59-1.17-0.6m-6.80.02c-0.440.01-0.860.24-1.170.6-0.210.25-0.260.590.020.830.250.210.510.220.950.020.22-0.10.26-0.050.390.010.190.090.520.160.8-0.020.43-0.260.36-0.520.15-0.83a1.38 1.38 0 0 0-1.14-0.61"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOpenbao;
