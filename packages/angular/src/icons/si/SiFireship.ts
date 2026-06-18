import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fireship",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFireship {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.240.05c-0.04-0.04-0.14-0.04-0.22-0.05-0.040.06-0.10.11-0.110.17a3.11 3.11 0 0 0-0.060.42 15.42 15.42 0 0 1-3.74 8.69c-1.26 1.47-2.51 2.98-3.44 4.59-2.29 3.97-0.25 8.03 4.76 9.80.160.060.350.090.760.18-1.7-1.53-2.57-3.1-2.28-4.940.28-1.76 1.17-3.34 2.53-4.77a1.04 1.04 0 0 1 0.10.55c-0.07 1.570.45 2.96 2.06 4.060.740.51 1.41 1.08 2.08 1.640.680.570.88 1.260.69 2.02-0.090.37-0.230.73-0.38 1.17 1.15-0.11 2.2-0.26 2.91-0.90.68-0.6 1.18-1.32 1.91-2.150.050.710.15 1.250.11 1.8-0.040.57-0.22 1.13-0.34 1.69 3.48-0.52 6.55-3.93 6.68-7.430.1-2.54-2.07-6.27-3.89-6.64l0.30.69c0.63 1.390.82 2.80.42 4.26-0.4 1.45-2.43 3.07-4.21 3.280.06-0.140.09-0.280.17-0.39 1.93-2.6 1.95-5.310.85-8.08C15.44 5.98 12.63 2.88 9.240.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFireship;
