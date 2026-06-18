import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-roadmapdotsh",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRoadmapdotsh {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.69 0H3.31A3.31 3.31 0 0 0 0 3.31v17.39A3.31 3.31 0 0 0 3.31 24h17.39A3.31 3.31 0 0 0 24 20.69V3.31A3.31 3.31 0 0 0 20.69 0zm-7.71 9.18c-0.350.03-0.690.08-1.020.14-0.330.06-0.650.13-0.950.21a3.64 3.64 0 0 0-0.740.24v8.1a5.52 5.52 0 0 1-0.760.14c-0.330.05-0.680.07-1.040.07a5.87 5.87 0 0 1-0.95-0.07 1.59 1.59 0 0 1-0.69-0.28 1.48 1.48 0 0 1-0.45-0.57c-0.09-0.25-0.14-0.58-0.14-0.97V9.06c0-0.360.06-0.670.19-0.930.14-0.270.34-0.510.59-0.71a3.93 3.93 0 0 1 0.93-0.55 9.13 9.13 0 0 1 2.54-0.74 8.09 8.09 0 0 1 1.38-0.12c0.76 0 1.360.15 1.80.450.440.280.670.760.67 1.43 0 0.22-0.030.44-0.090.67a3.08 3.08 0 0 1-0.240.57c-0.34 0-0.680.02-1.020.05zm5.11 8.45c-0.410.44-0.970.67-1.690.67s-1.27-0.22-1.69-0.66c-0.41-0.44-0.62-1-0.62-1.66 0-0.660.21-1.220.62-1.660.41-0.440.97-0.66 1.69-0.66s1.270.22 1.690.66c0.410.440.6210.62 1.66 0 0.66-0.21 1.22-0.62 1.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRoadmapdotsh;
