import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-xubuntu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiXubuntu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m3.91 4.47c0.38-0.040.15 1.610.05 2.6-0.080.87-0.13 1.15-0.29 2.11-0.050.3-0.20.69-0.670.63-0.39-0.05-0.46-0.7-0.44-10.02-0.510.3-1.770.39-2.220.12-0.580.47-1.960.91-2.12a0.170.17 0 0 1 0.04-0.01m3.230.71c0.550.02-0.42 1.75-0.81 2.66-0.280.64-0.47 1.16-0.83 2-0.120.28-0.480.69-0.910.48-0.35-0.18-0.23-0.690.02-1.290.37-0.860.67-1.44 1.06-2.090.3-0.510.93-1.7 1.4-1.77a0.340.34 0 0 1 0.060zm-9.280.47c0.310.020.570.160.750.380.770.930.61 2.530.67 3.75 1.20.07 2.190.21 3.470.580.970.28 2.320.76 3.11 1.270.790.51 1.38 1.17 1.5 2.060.080.55-0.34 1.11-0.92 1.61-0.570.51-1.330.98-2.14 1.43-0.810.45-1.650.85-2.32 1.16-1.470.68-3.02 1.35-4.92 1.54-5.150.52-4.59-4.16-4.39-5.70.16-1.20.8-2.940.91-3.26-0.14-0.45-0.25-0.82-0.34-1.3-0.07-0.4-0.11-0.87-0.02-1.280.09-0.40.36-0.840.8-1.030.35-0.150.61-0.090.940.210.270.240.50.610.720.990.320.550.45 1.120.72 1.680.050.110.320.160.480.110.04-0.010.08-0.10.06-0.17-0.35-1.19-0.6-2.18-0.42-3.040.16-0.80.84-0.97 1.34-0.99"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiXubuntu;
