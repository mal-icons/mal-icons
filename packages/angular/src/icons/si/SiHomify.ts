import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-homify",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHomify {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.38 10.56a1.73 1.73 0 0 1 0 0.06l00.05c-0.09 2.33-0.06 11.36-0.06 11.820 1.08-0.83 1.94-1.6 1.28l-6.98-5.53a373.72 373.72 0 0 1-4.74 4.93c-0.980.95-1.79-1.33-1.04-1.810.07-0.04 2.22-1.95 4.61-4.05L5.4 13.21c-0.45-0.36-0.62-0.95-0.36-1.26a0.460.46 0 0 1 0.33-0.130.470.47 0 0 1 0.160.04c1.60.72 3.96 2.49 6.31 4.33 2.45-2.15 4.81-4.19 5.12-4.360.38-0.210.480.350.350.52-0.130.17-2.17 2.33-4.41 4.68 2.2 1.73 4.29 3.39 5.61 4.14l0.22-10.62c-0.17-0.21-5.33-7.16-5.89-7.75-0.890.78-5.57 6.11-5.8 6.34 1.070.11 5.60.38 8.450.680.720.07 1.20.61-0.350.59l-11.1-0.01a0.440.44 0 0 1-0.39-0.270.420.42 0 0 1 0.09-0.46C3.8 9.61 11.780.75 12.450.18A0.70.7 0 0 1 12.94 0a0.730.73 0 0 1 0.480.23c0.080.08 4.29 5.94 6.34 8.80.490.680.62 1.140.62 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHomify;
