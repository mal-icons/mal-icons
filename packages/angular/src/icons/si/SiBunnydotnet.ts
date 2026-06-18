import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bunnydotnet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBunnydotnet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12.98 3.83 5.64 3.1L13.44 0c-0.86 1.13-1.03 2.59-0.46 3.83ZM10.4 15.03c0.69 0 1.260.56 1.26 1.29 0 0.68-0.57 1.24-1.32 1.24-0.69 0-1.26-0.56-1.26-1.240.06-0.670.63-1.29 1.32-1.29ZM6.5 1.03l15.83 8.44c0.40.170.520.620.34 1.01a0.510.51 0 0 1-0.340.34 10.92 10.92 0 0 1-3.9 1.46l-3.33 6.64s-1.03 2.31-3.9 1.41c1.2-1.18 2.64-2.25 2.64-4.05 0-1.91-1.55-3.43-3.5-3.43-1.95 0-3.5 1.52-3.5 3.43 0 2.36 2.41 3.38 3.73 5.010.570.840.52 1.97-0.17 2.7-1.61-1.58-4.76-4.28-6.08-6.02a5.55 5.55 0 0 1-1.15-3.1c0.11-2.48 1.84-4.62 4.24-5.350.75-0.22 1.49-0.28 2.24-0.28 1.030.06 2.070.39 2.980.9 1.430.79 2.070.62 3.04-0.220.57-0.45 1.2-1.970.23-2.31a6.1 6.1 0 0 0-0.98-0.22C13.15 7.06 9.99 6.72 8.85 6.1 7.01 5.09 5.75 3 6.5 1.03ZM2.46 8.66c0.63 0 1.210.52 1.21 1.19v1.19H2.46c-0.63 0-1.21-0.52-1.21-1.19 0-0.620.53-1.19 1.21-1.19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBunnydotnet;
