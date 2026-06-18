import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-stats",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxStats {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 12a2 2 0 0 0-0.70.13l-2.4-1.96c0.06-0.210.1-0.440.1-0.67C17 8.11 15.89 7 14.5 7S12 8.11 12 9.5c0 0.40.10.770.26 1.1l-2.91 3.44A2.06 2.06 0 0 0 9 14c-0.18 0-0.350.03-0.510.07l-2.56-2.56C5.97 11.35 6 11.18 6 11c0-1.11-0.89-2-2-2s-2 0.89-2 2 0.89 2 2 2c0.18 0 0.35-0.030.51-0.07l2.56 2.56A1.91 1.91 0 0 0 7 16c0 1.110.89 2 2 2s2-0.89 2-2c0-0.24-0.05-0.46-0.12-0.67l2.91-3.44c0.230.070.460.110.710.11a2.48 2.48 0 0 0 1.13-0.28l2.4 1.96A2.08 2.08 0 0 0 18 14c0 1.110.89 2 2 2s2-0.89 2-2-0.89-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxStats;
