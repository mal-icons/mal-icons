import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-farcaster",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFarcaster {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.240.24H5.76C2.580.24 0 2.82 0 6v12c0 3.18 2.58 5.76 5.76 5.76h12.48c3.18 0 5.76-2.58 5.76-5.76V6C24 2.82 21.420.24 18.240.24m0.82 17.17v0.5c0.29-0.030.550.190.540.48v0.57h-5.14v-0.57c0-0.290.26-0.50.54-0.48v-0.5c0-0.220.15-0.40.36-0.46l-0.01-4.36c-0.16-1.74-1.64-3.1-3.44-3.1-1.8 0-3.28 1.36-3.44 3.1l-0.01 4.36c0.230.040.530.210.540.46v0.5c0.29-0.030.550.190.540.48v0.57H4.39v-0.57c0-0.290.26-0.50.54-0.48v-0.5c0-0.250.2-0.450.45-0.47v-7.89h-0.49L4.29 7.01l2.640V5.04h9.95v1.97h2.82l-0.61 2.03h-0.49v7.89c0.250.020.450.220.450.47"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFarcaster;
