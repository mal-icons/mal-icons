import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googlejules",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGooglejules {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.2 24q-1.26 0-2.13-0.87T1.2 21v-0.6q0-0.510.35-0.85T2.4 19.2t0.860.350.350.86v0.6q0 0.240.180.42t0.420.180.42-0.180.18-0.42V7.2q0-3 2.1-5.1T12 0t5.1 2.1 2.1 5.1V21q0 0.240.180.42t0.420.180.42-0.180.18-0.42v-0.6q0-0.510.35-0.85t0.86-0.340.860.350.350.86v0.6q0 1.26-0.87 2.13T19.8 24t-2.13-0.87T16.8 21v-5.4h-1.62v4.8q0 0.51-0.340.86t-0.850.35-0.85-0.34-0.34-0.85v-4.8h-1.59v4.8q0 0.51-0.340.86t-0.850.35-0.85-0.34-0.34-0.85v-4.8H7.2V21q0 1.26-0.87 2.13T4.2 24m4.2-11.4q0.54 0 0.87-0.45t0.33-1.05-0.33-1.05-0.87-0.45-0.870.45-0.33 1.050.33 1.050.870.45m7.2 0q0.54 0 0.87-0.45t0.33-1.05-0.33-1.05-0.87-0.45-0.870.45-0.33 1.050.33 1.050.870.45"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGooglejules;
