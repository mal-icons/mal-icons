import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-eagle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEagle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0.04 3.86c1.320.02 2.630.34 3.780.990.550.310.960.64 1.240.9a6.91 6.91 0 0 0-2.25 3.04c-0.060.17-0.120.35-0.180.55a6.86 6.86 0 0 0-0.25 1.61c00.1600.3700.580.010.240.050.520.080.79a7.01 7.01 0 0 0 1.75 3.59 6.89 6.89 0 0 0 1.87 1.42 7.79 7.79 0 0 1-2.63 2.17 7.72 7.72 0 0 1-3.850.81 9.16 9.16 0 0 1-0.22-0.01 7.7 7.7 0 0 1-1.5-0.25 8.2 8.2 0 0 1-2.83-1.35 7.06 7.06 0 0 1-1.89-2.1c-0.22-0.38-1.49-2.64-0.77-5.45A7.26 7.26 0 0 1 5.93 8.18a5.51 5.51 0 0 0-2.1 1.08C4.12 8.57 5.31 6 8.22 4.66a8.94 8.94 0 0 1 3.82-0.8zm5.7 2.51c0.20.130.460.310.740.570.110.10.480.470.82 1.050.410.70.55 1.330.62 1.65a5.52 5.52 0 0 1 0.01 2.3 7.13 7.13 0 0 0-2.04-1.69 7.24 7.24 0 0 0-1.550.3 6.83 6.83 0 0 0-1.050.42 6.06 6.06 0 0 1 0.27-1.56 5.92 5.92 0 0 1 0.81-1.64 6.26 6.26 0 0 1 1.38-1.41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEagle;
