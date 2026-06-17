import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filetype-psd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFiletypePsd {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2h-0.5v-1h0.5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.12 14.84a1.13 1.13 0 0 0 0.40.82q0.190.160.480.250.280.090.670.090.51 0 0.86-0.160.36-0.160.54-0.44a1.17 1.17 0 0 0 0.19-0.66q0-0.34-0.13-0.56a1 1 0 0 0-0.37-0.36 2 2 0 0 0-0.56-0.21l-0.62-0.14a1 1 0 0 1-0.4-0.180.370.37 0 0 1-0.14-0.3q0-0.230.18-0.380.19-0.150.51-0.150.21 0 0.370.07a0.60.6 0 0 1 0.250.180.560.56 0 0 1 0.120.26h0.75a1.1 1.1 0 0 0-0.2-0.57 1.2 1.2 0 0 0-0.5-0.41 1.8 1.8 0 0 0-0.78-0.15q-0.44 0-0.780.15-0.340.15-0.530.42-0.190.27-0.190.64 0 0.30.120.52t0.350.37q0.230.140.540.21l0.620.14q0.310.070.460.19a0.390.39 0 0 1 0.150.330.50.5 0 0 1-0.080.290.560.56 0 0 1-0.250.19q-0.170.07-0.410.07-0.18 0-0.32-0.04a0.80.8 0 0 1-0.25-0.110.580.58 0 0 1-0.25-0.38zM1.6 11.93H0v4h0.79v-1.34h0.8q0.43 0 0.73-0.170.31-0.170.46-0.47a1.4 1.4 0 0 0 0.16-0.68q0-0.37-0.16-0.68a1.2 1.2 0 0 0-0.46-0.48q-0.3-0.18-0.73-0.18m0.55 1.33a0.80.8 0 0 1-0.080.380.570.57 0 0 1-0.240.240.80.8 0 0 1-0.370.08H0.79v-1.41h0.66q0.33 0 0.510.180.190.180.190.52m4.61 2.67v-4h1.46q0.61 0 10.230.40.240.590.680.20.450.2 1.08 0 0.63-0.2 1.08t-0.590.69q-0.40.24-1 0.24H6.76Zm1.35-3.35h-0.56v2.71h0.56q0.28 0 0.48-0.08a0.80.8 0 0 0 0.33-0.25 1.1 1.1 0 0 0 0.2-0.42q0.07-0.250.07-0.59a2.1 2.1 0 0 0-0.12-0.750.90.9 0 0 0-0.35-0.45q-0.24-0.15-0.61-0.15"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFiletypePsd;
