import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bittorrent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBittorrent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120C5.3700 5.37 0 12a12 12 0 0 0 1.7 6.160.130.13 0 0 0 0.110.04c0.03 0 0.05-0.070.05-0.11a0.740.74 0 0 0-0.03-0.13 22.14 22.14 0 0 1-0.42-2.29 9.84 9.84 0 0 1 0.43-3.87c1.1-3.4 3.33-5.7 6.66-6.94a10.3 10.3 0 0 1 3.4-0.60.780.78 0 0 1 0.860.76c0 0.45-0.340.74-0.850.77a12.85 12.85 0 0 0-1.610.17 8.69 8.69 0 0 0-4.86 2.64C3.35 10.82 2.55 13.46 3.03 16.45a8.68 8.68 0 0 0 2.45 4.79 8.94 8.94 0 0 0 6.37 2.76h0.16a11.95 11.95 0 0 0 5.61-1.39h-5.59a8.4 8.4 0 0 1-1.41-0.13c-4.14-0.75-6.91-4.67-6.24-8.820.56-3.53 3.47-6.21 7.03-6.48a7.64 7.64 0 0 1 2.160.140.750.75 0 0 1 0.620.880.780.78 0 0 1-0.960.6 6.08 6.08 0 0 0-0.8-0.12 6.33 6.33 0 0 0-2.90.5c-2.51 1.08-4.01 3.67-3.7 6.380.36 3.14 3.01 5.51 6.16 5.52h6.99c0.68 0 0.840.01 1.14-0.240.38-0.350.74-0.73 1.08-1.13h-9.33a4.35 4.35 0 0 1-2.07-0.52c-2.4-1.18-3.4-4.08-2.22-6.49s4.08-3.4 6.49-2.22c0.120.060.240.120.350.19a0.750.75 0 0 1 0.32 1.040.770.77 0 0 1-1.070.27c-1.6-0.91-3.63-0.36-4.55 1.24a3.33 3.33 0 0 0-0.4 2.18c0.24 1.62 1.64 2.81 3.28 2.8 3.360.03 6.72 0 10.08 0a0.420.42 0 0 0 0.28-0.14c3.36-5.71 1.45-13.07-4.26-16.42a12 12 0 0 0-6.08-1.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBittorrent;
