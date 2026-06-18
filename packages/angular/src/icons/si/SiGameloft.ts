import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gameloft",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGameloft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.84 18.94c0.490.86 1.25 1.26 2.19 1.37 3.390.39 13.520.18 13.530.18 2.4 0 4.33-1.1 4.85-3.370.13-0.580.24-2.540.12-4.62-0.13-2.16-1.11-3.59-4.05-3.79-3.9-0.26-9.42-0.14-11.650.09-1.190.12-1.890.94-1.87 2.050.04 2.650.07 3.050.09 3.2 1.190.17 1.170.18 1.210.120.21-0.380.6-0.64 1.03-0.690.5-0.070.12-0.05 10.6-0.20.41 0 0.650.190.730.590.090.520.1 1.050.05 1.58-0.030.45-0.4 1.17-1.08 1.18-0.01 0-7.50.04-11.08-0.13-1.08-0.05-2.26-1.11-2.26-3.09 0-0.84 0-3.550.07-4.39A2.24 2.24 0 0 1 5.17 6.96c1.33-0.24 13.75-0.09 14.540.09 2.240.51 2.43 3.2 2.44 3.260.21 1.540.23 3.280.21 4.86-0.05 3.55-1.37 4.33-1.81 4.84-0.130.150.040.230.30.42 1.12-0.21 2.71-1.43 3.02-4.010.12-10.21-3.280.02-7.38-0.12-2.66-1.24-4.95-4.95-5.38-3.22-0.37-10.3-0.07-13.48 0C-0.1 3.770.01 6.940.01 8.23c-0.02 8.17-0.01 9.230.84 10.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGameloft;
