import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-instagram-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlInstagramAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.95 8.31a6.53 6.53 0 0 0-0.42-2.22 4.61 4.61 0 0 0-2.63-2.63 6.61 6.61 0 0 0-2.19-0.42c-0.96-0.04-1.27-0.05-3.71-0.05s-2.75 0-3.710.06a6.61 6.61 0 0 0-2.180.42 4.61 4.61 0 0 0-2.63 2.63 6.55 6.55 0 0 0-0.42 2.19c-0.040.96-0.06 1.27-0.06 3.71s0 2.750.06 3.71c0.020.750.16 1.490.42 2.19a4.61 4.61 0 0 0 2.63 2.63 6.58 6.58 0 0 0 2.190.45c0.960.04 1.270.06 3.710.06s2.76 0 3.71-0.06a6.59 6.59 0 0 0 2.19-0.42 4.62 4.62 0 0 0 2.63-2.63c0.26-0.70.4-1.440.42-2.190.04-0.960.06-1.270.06-3.710-2.440-2.75-0.06-3.71zm-8.95 8.3c-2.55 0-4.62-2.07-4.62-4.62s2.07-4.62 4.62-4.62a4.62 4.62 0 0 1 0 9.25zm4.81-8.34a1.08 1.08 0 0 1-1.08-1.08 1.08 1.08 0 1 1 2.15 0c0 0.6-0.48 1.08-1.08 1.08z"}],["circle",{"cx":"11.99","cy":"11.98","r":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlInstagramAlt;
