import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filetype-svg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFiletypeSvg {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 14.84a1.13 1.13 0 0 0 0.40.82q0.190.160.480.250.280.090.670.090.51 0 0.86-0.160.36-0.160.54-0.44a1.17 1.17 0 0 0 0.19-0.66q0-0.34-0.13-0.56a1 1 0 0 0-0.37-0.36 2 2 0 0 0-0.56-0.21l-0.62-0.14a1 1 0 0 1-0.4-0.180.370.37 0 0 1-0.14-0.3q0-0.230.18-0.380.19-0.150.51-0.150.21 0 0.370.07a0.60.6 0 0 1 0.250.180.560.56 0 0 1 0.120.26h0.75a1.1 1.1 0 0 0-0.2-0.57 1.2 1.2 0 0 0-0.5-0.41 1.8 1.8 0 0 0-0.78-0.15q-0.44 0-0.780.15-0.340.15-0.530.42-0.190.27-0.190.64 0 0.30.120.52t0.350.37q0.230.140.540.21l0.620.14q0.310.070.460.19a0.390.39 0 0 1 0.150.330.50.5 0 0 1-0.080.290.560.56 0 0 1-0.260.19q-0.170.07-0.410.07-0.18 0-0.32-0.04a0.80.8 0 0 1-0.25-0.110.580.58 0 0 1-0.25-0.38zm4.58 1.09h0.95l1.33-4h-0.88l-0.89 3.14H5.05l-0.9-3.14h-0.92zm5.48-3.29q0.110.230.140.49h-0.78a0.80.8 0 0 0-0.1-0.250.70.7 0 0 0-0.17-0.190.70.7 0 0 0-0.24-0.13 1 1 0 0 0-0.3-0.04q-0.43 0-0.660.3-0.230.3-0.230.85v0.5q0 0.350.10.62a0.90.9 0 0 0 0.310.410.870.87 0 0 0 0.520.15 1 1 0 0 0 0.46-0.10.670.67 0 0 0 0.27-0.26q0.09-0.160.09-0.36v-0.25h-0.82v-0.59h1.58v0.8q0 0.29-0.10.55a1.3 1.3 0 0 1-0.290.46 1.4 1.4 0 0 1-0.490.31q-0.30.11-0.70.11a2 2 0 0 1-0.75-0.13 1.45 1.45 0 0 1-0.53-0.38 1.6 1.6 0 0 1-0.32-0.58 2.5 2.5 0 0 1-0.1-0.74v-0.51q0-0.540.2-0.950.2-0.410.58-0.630.38-0.230.93-0.230.36 0 0.640.10.280.10.480.280.20.180.310.41"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFiletypeSvg;
