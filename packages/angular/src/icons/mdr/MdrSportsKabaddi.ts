import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sports-kabaddi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSportsKabaddi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"16.5","cy":"2.38","r":"2"}],["path",{"d":"M24 10.88v-3.7l-4.99-2.11c-0.98-0.41-2.12-0.07-2.710.81l-1 1.6c-0.67 1.18-1.91 2.06-3.41 2.32l0.060.06c0.690.69 1.52 1.07 2.46 1.170.8-0.42 1.52-0.98 2.09-1.64l0.6 3-1.16 1.1-0.940.89v6.5c0 0.550.45 1 1 1s1-0.45 1-1v-5l2.1-2 1.62 7.19c0.110.470.530.81 1.020.810.66 0 1.15-0.6 1.02-1.24l-1.94-9.76-0.62-3.1 1.80.7v2.4c0 0.550.45 1 1 1s1-0.45 1-1zM10.29 8.09c0.220.150.470.240.720.290.130.020.250.040.380.04s0.26-0.010.38-0.04c0.13-0.020.25-0.060.37-0.110.24-0.10.47-0.240.66-0.440.49-0.490.67-1.170.55-1.8-0.07-0.37-0.25-0.74-0.55-1.03-0.19-0.19-0.42-0.34-0.66-0.44-0.12-0.05-0.24-0.09-0.37-0.11s-0.25-0.04-0.38-0.04c-0.12 0-0.230.01-0.350.03-0.140.02-0.280.06-0.410.11-0.230.11-0.460.26-0.650.45-0.30.29-0.480.66-0.55 1.03-0.120.630.06 1.310.55 1.80.090.10.20.180.310.26z"}],["path",{"d":"m11.24 10.56-2-2c-0.1-0.1-0.2-0.18-0.31-0.26a1.93 1.93 0 0 0-0.72-0.28c-0.13-0.03-0.25-0.04-0.38-0.04-0.51 0-1.020.2-1.410.59l-3.34 3.34c-0.410.41-0.620.98-0.58 1.54 0 0.180.040.370.110.55l1.07 2.95-2.92 2.92a11 0 1 0 1.41 1.41l3.54-3.54v-2.22L7 16.75v4.13c0 0.550.45 1 1 1s1-0.45 1-1v-5l-2.12-2.12 2.36-2.360.710.71c1.02 1 2.28 1.69 3.79 1.940.640.11 1.21-0.45 1.16-1.1-0.03-0.48-0.4-0.87-0.87-0.94-1.13-0.18-2.06-0.72-2.79-1.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSportsKabaddi;
