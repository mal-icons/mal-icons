import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-menu-book",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMenuBook {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.5 4.5c-1.95 0-4.050.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.990.22-4.280.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.940.98-0.25 2.02-0.36 3.02-0.36 1.56 0 3.220.26 4.560.920.60.3 1.280.3 1.87 0 1.34-0.67 3-0.92 4.56-0.92 1 0 2.040.11 3.020.36 1.260.33 2.48-0.63 2.48-1.94V7.14c0-0.81-0.49-1.52-1.22-1.85-1.28-0.57-2.82-0.79-4.27-0.79zM21 17.23c0 0.63-0.58 1.09-1.20.98-0.75-0.14-1.53-0.2-2.3-0.2-1.7 0-4.150.65-5.5 1.5V8c1.35-0.85 3.8-1.5 5.5-1.50.92 0 1.830.09 2.70.280.460.10.80.510.80.98v9.47z"}],["path",{"d":"M13.98 11.01c-0.32 0-0.61-0.2-0.71-0.52-0.13-0.390.09-0.820.48-0.94 1.54-0.5 3.53-0.66 5.36-0.450.410.050.710.420.660.83-0.050.41-0.420.71-0.830.66-1.62-0.19-3.39-0.04-4.730.39-0.080.01-0.160.03-0.230.03zm0 2.66c-0.32 0-0.61-0.2-0.71-0.52-0.13-0.390.09-0.820.48-0.94 1.53-0.5 3.53-0.66 5.36-0.450.410.050.710.420.660.83-0.050.41-0.420.71-0.830.66-1.62-0.19-3.39-0.04-4.730.39a0.970.97 0 0 1-0.230.03zm0 2.66c-0.32 0-0.61-0.2-0.71-0.52-0.13-0.390.09-0.820.48-0.94 1.53-0.5 3.53-0.66 5.36-0.450.410.050.710.420.660.83-0.050.41-0.420.7-0.830.66-1.62-0.19-3.39-0.04-4.730.39a0.970.97 0 0 1-0.230.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMenuBook;
