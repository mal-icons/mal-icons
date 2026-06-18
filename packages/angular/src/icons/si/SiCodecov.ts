import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-codecov",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCodecov {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.010.48C5.390.490.01 5.83 0 12.4v0.03l2.04 1.190.03-0.02a5.82 5.82 0 13.31-1.02c0.37 0 0.730.03 1.090.1l-0.04-0.01a5.69 5.69 0 12.87 1.43l000.350.330.2-0.43c0.19-0.420.41-0.810.66-1.170.1-0.140.21-0.290.33-0.45l0.21-0.26-0.25-0.21a8.33 8.33 0 0-3.84-1.81l-0.05-0.01a8.57 8.57 0 0-4.080.25l0.06-0.02c0.97-4.26 4.71-7.22 9.13-7.23a9.31 9.31 0 16.6 2.71 9.2 9.2 0 12.51 4.5 8.39 8.39 0 0-2.5-0.38h-0.15c-0.360.01-0.70.03-1.040.08l0.050-0.040.01a8.1 8.1 0 0-0.390.06c-0.060.01-0.110.02-0.170.03a8.1 8.1 0 0-0.390.09l-0.140.03a9.21 9.21 0 0-0.480.14l-0.030.01c-0.350.12-0.710.27-1.050.44l-0.030.01c-0.150.08-0.30.16-0.470.26l-0.040.02a8.22 8.22 0 0-2.11 1.8l-0.010.01-0.070.09a8.35 8.35 0 0-0.380.5c-0.090.13-0.180.27-0.290.45l-0.060.1a8.99 8.99 0 0-0.230.43l-0.020.03c-0.170.34-0.320.7-0.44 1.06l-0.020.05a8.05 8.05 0 0-0.41 2.72v-0.010.11a12 12 0 0.020.43l0-0.04a11.68 11.68 0 0.040.41l0.010.040.010.1c0.020.130.040.250.060.380.24 1.270.85 2.53 1.75 3.66l0.040.050.04-0.05c0.36-0.42 1.25-1.77 1.33-2.58v-0.01l-0.01-0.01a5.56 5.56 0 1-0.64-2.59c0-3.02 2.37-5.52 5.4-5.7l0.2-0.01a5.93 5.93 0 13.47 1.02l0.030.02L24 12.42v-0.03a11.77 11.77 0 0-3.51-8.42A11.96 11.96 0 12.010.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCodecov;
