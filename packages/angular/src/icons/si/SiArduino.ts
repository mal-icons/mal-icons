import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-arduino",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiArduino {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.09 6.15c-0.3 0-0.610.02-0.910.07-2.530.37-4.23 2.24-5.18 3.67-0.95-1.43-2.65-3.31-5.18-3.67a6.49 6.49 0 0 0-0.91-0.07C2.65 6.15 0 8.77 0 12s2.66 5.85 5.91 5.85c0.3 0 0.61-0.020.92-0.07 2.53-0.38 4.23-2.25 5.18-3.680.95 1.44 2.65 3.31 5.18 3.680.30.040.610.070.920.07C21.34 17.85 24 15.23 24 12s-2.66-5.85-5.91-5.85zM6.53 15.73a3.84 3.84 0 0 1-0.620.04c-2.15 0-3.89-1.7-3.89-3.78 0-2.08 1.75-3.78 3.9-3.780.21 0 0.420.020.620.04 2.390.35 3.85 2.77 4.35 3.73-0.510.97-1.97 3.38-4.36 3.73zm11.560.04c-0.21 0-0.42-0.02-0.62-0.04-2.39-0.35-3.86-2.77-4.35-3.730.49-0.97 1.96-3.38 4.35-3.730.21-0.030.42-0.040.62-0.04 2.15 0 3.89 1.7 3.89 3.78 0 2.09-1.75 3.78-3.89 3.78zm1.65-4.4v1.13h-1.2v1.18h-1.16v-1.18H16.17v-1.13h1.21V10.19h1.16v1.18h1.21zM4.25 12.5H7.82v-1.12H4.25v1.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiArduino;
