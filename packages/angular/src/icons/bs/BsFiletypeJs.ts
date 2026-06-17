import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filetype-js",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFiletypeJs {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.19 15.29a1.2 1.2 0 0 1-0.11-0.45h0.77a0.580.58 0 0 0 0.260.38q0.110.070.250.110.140.040.320.040.25 0 0.41-0.07a0.560.56 0 0 0 0.26-0.190.50.5 0 0 0 0.09-0.290.390.39 0 0 0-0.15-0.33q-0.15-0.12-0.46-0.19l-0.62-0.14a1.7 1.7 0 0 1-0.54-0.21 1 1 0 0 1-0.35-0.37 1.1 1.1 0 0 1-0.12-0.52q0-0.370.19-0.640.19-0.270.53-0.420.34-0.150.78-0.150.46 0 0.780.150.320.150.50.410.180.260.20.57h-0.75a0.560.56 0 0 0-0.12-0.260.60.6 0 0 0-0.25-0.180.90.9 0 0 0-0.37-0.07q-0.32 0-0.510.15a0.470.47 0 0 0-0.180.38q0 0.180.140.3a1 1 0 0 0 0.410.18l0.620.14q0.330.080.570.210.240.140.380.36t0.140.56q0 0.37-0.190.66a1.2 1.2 0 0 1-0.540.44q-0.350.16-0.860.16-0.38 0-0.66-0.09a1.4 1.4 0 0 1-0.48-0.25 1.1 1.1 0 0 1-0.29-0.37m-3.1-0.03A1.3 1.3 0 0 1 0 14.79h0.77a0.60.6 0 0 0 0.070.270.50.5 0 0 0 0.450.25q0.28 0 0.42-0.160.14-0.160.14-0.47v-2.74h0.79v2.73q0 0.66-0.36 1-0.350.35-0.980.35a1.6 1.6 0 0 1-0.57-0.09 1.15 1.15 0 0 1-0.41-0.27 1.1 1.1 0 0 1-0.24-0.39"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFiletypeJs;
