import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-broadcast-on-home",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBroadcastOnHome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 6c0-1.1-0.9-2-2-2H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h15v2.59c0.730.29 1.40.69 2 1.17V6zM8 9H3c-0.5 0-1 0.5-1 1v9c0 0.50.5 1 1 1h5c0.5 0 1-0.5 1-1v-9c0-0.5-0.5-1-1-1zm-1 9H4v-7h3v7zm10.75-1.03c0.3-0.230.5-0.570.5-0.97a1.25 1.25 0 0 0-2.5 0c0 0.40.20.750.50.97v4.28c0 0.410.340.750.750.75s0.75-0.340.75-0.75v-4.28z"}],["path",{"d":"M17.54 13.56c0.980.21 1.76 1.03 1.93 2.020.110.64-0.03 1.25-0.34 1.74a0.730.73 0 0 0 0.120.91c0.340.330.90.29 1.16-0.120.51-0.820.73-1.830.53-2.9-0.3-1.56-1.56-2.83-3.12-3.13A4.01 4.01 0 0 0 13 16c0 0.780.22 1.50.6 2.110.250.410.830.46 1.160.120.24-0.240.29-0.630.11-0.92A2.44 2.44 0 0 1 14.5 16c0-1.55 1.43-2.78 3.04-2.44z"}],["path",{"d":"M16.25 9.54c-2.940.33-5.32 2.68-5.69 5.61-0.23 1.820.29 3.51 1.3 4.820.270.350.80.37 1.120.060.27-0.270.28-0.70.05-1a4.99 4.99 0 0 1-0.95-3.89 4.99 4.99 0 0 1 3.98-4.05C19.22 10.5 22 12.93 22 16c0 1.13-0.38 2.18-1.02 3.02-0.230.3-0.210.730.06 1 0.310.310.840.3 1.11-0.06A6.42 6.42 0 0 0 23.5 16c0-3.84-3.33-6.9-7.25-6.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBroadcastOnHome;
