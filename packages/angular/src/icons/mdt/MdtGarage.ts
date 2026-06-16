import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-garage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtGarage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 11.51v-0.01H7v3h10v-2.99zM9 14c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm6 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z","opacity":".3"}],["path",{"d":"M4 20h16V4H4v16zm1-8.81c0.82-2.47 1.34-4.03 1.56-4.690.05-0.160.12-0.290.19-0.40.02-0.020.03-0.040.05-0.060.38-0.530.92-0.540.92-0.54h8.56s0.540.010.920.53c0.020.030.030.050.050.070.070.110.140.240.190.40.220.660.74 2.23 1.56 4.69v6.5c0 0.45-0.350.81-0.780.81h-0.44c-0.44 0-0.78-0.36-0.78-0.81V16.5H7v1.19c0 0.45-0.350.81-0.780.81h-0.44c-0.43 0-0.78-0.36-0.78-0.81v-6.5z","opacity":".3"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 18H4V4h16v16z"}],["circle",{"cx":"9","cy":"13","r":"1"}],["circle",{"cx":"15","cy":"13","r":"1"}],["path",{"d":"M5.78 18.5h0.44c0.43 0 0.78-0.360.78-0.81V16.5h10v1.19c0 0.450.340.810.780.81h0.44c0.43 0 0.78-0.360.78-0.81v-6.5c-0.82-2.46-1.34-4.03-1.56-4.69-0.05-0.16-0.12-0.29-0.19-0.4-0.02-0.02-0.03-0.04-0.05-0.07-0.38-0.52-0.92-0.53-0.92-0.53H7.72s-0.540.01-0.920.54c-0.020.02-0.030.04-0.050.06-0.070.11-0.140.24-0.190.4-0.220.66-0.74 2.22-1.56 4.69v6.5c0 0.450.350.810.780.81zm2.55-11h7.34l0.230.690.43 1.31H7.67l0.66-2zM7 11.51v-0.01h10v3H7v-2.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtGarage;
