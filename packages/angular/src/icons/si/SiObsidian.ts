import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-obsidian",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiObsidian {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.36 18.54a68.97 68.96 0 0 0 1.86-2.950.810.81 0 0 0-0.06-0.9c-0.52-0.68-1.5-2.08-2.04-3.36-0.55-1.32-0.64-3.37-0.64-4.38a1.71 1.71 0 0 0-0.36-1.05l-3.2-4.06a3.74 3.74 0 0 1-0.080.54c-0.110.5-0.31 1-0.54 1.5-0.130.29-0.290.6-0.450.91l-0.310.63c-0.52 1.07-1 2.23-1.13 3.59-0.12 1.260.05 2.730.82 4.480.130.010.260.030.390.04a6.36 6.36 0 0 1 3.33 1.51c0.920.79 1.74 1.92 2.42 3.5zM8.2 22.57c0.070.010.150.020.220.020.780.02 2.10.09 3.160.290.870.16 2.590.64 4.01 1.06 1.080.32 2.2-0.55 2.36-1.660.11-0.810.33-1.730.73-2.58l-0.010.01c-0.67-1.87-1.52-3.08-2.42-3.85a5.3 5.3 0 0 0-2.78-1.26c-1.54-0.22-2.950.19-3.840.450.53 2.220.37 4.83-1.42 7.53zM5.53 9.94c-0.020.1-0.060.2-0.10.29L2.82 16.06a1.6 1.6 0 0 0 0.31 1.77l4.12 4.24c2.1-3.1 1.8-6.020.84-8.3-0.73-1.73-1.83-3.08-2.55-3.83zM9.32 14.01c0.62-0.18 1.61-0.46 2.75-0.53-0.68-1.72-0.85-3.23-0.72-4.580.15-1.550.7-2.85 1.24-3.950.11-0.230.22-0.450.33-0.660.15-0.30.29-0.580.42-0.860.22-0.470.38-0.880.46-1.270.08-0.380.08-0.72-0.01-1.04-0.09-0.32-0.3-0.67-0.68-1.06a1.6 1.6 0 0 0-1.470.36l-4.95 4.45a1.6 1.6 0 0 0-0.510.95l-0.43 2.83c0.670.59 2.33 2.32 3.34 4.710.090.210.180.430.250.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiObsidian;
