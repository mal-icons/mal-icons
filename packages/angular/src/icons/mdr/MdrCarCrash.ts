import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-car-crash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCarCrash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 6c-0.28 0-0.5-0.22-0.5-0.5v-3c0-0.280.22-0.50.5-0.5s0.50.220.50.5v3c0 0.28-0.220.5-0.50.5zm0.5 1.5c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.50.22-0.50.5-0.50.50.220.50.5zm1 11.5c0.82 0 1.5-0.67 1.5-1.5v-6.18c-1.050.51-2.160.69-3.090.680.060.160.090.330.090.5 0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.5c0-0.390.15-0.740.39-1.01A7.03 7.03 0 0 1 11.68 9H5.81l1.04-3H11c0-0.690.1-1.370.29-2H6.5c-0.66 0-1.210.42-1.42 1.01l-1.97 5.67c-0.070.21-0.110.43-0.110.66v7.16c0 0.830.67 1.5 1.5 1.5S6 19.33 6 18.5V18h12v0.5c0 0.830.68 1.5 1.5 1.5zm-12-5c-0.83 0-1.5-0.67-1.5-1.5S6.67 12 7.5 12s1.50.67 1.5 1.5S8.33 15 7.5 15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCarCrash;
