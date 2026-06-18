import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zettlr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZettlr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.460.19C0.340.570.02 2.530.02 4.3L0.02 17.33c0 1.55-0.22 3.960.72 5.28 1.2 1.67 3.57 1.36 5.37 1.35l8.310.03c1.610 5.630.1 7.2-0.23 2.12-0.45 2.33-2.31 2.33-4.08l0.01-13.63c0-1.530.31-3.42-0.68-4.71C22.02-0.3 19.560.03 17.740.03L13.240.04c-1.61 0-9.19-0.14-10.780.14m14.25 3.67c0 0.530.19 1.47-0.04 1.95-0.110.24-0.490.38-0.70.52-0.50.32-0.960.68-1.42 1.04-1.48 1.19-3.03 2.82-3.43 4.74-0.180.9-0.16 1.990.59 2.63 1.21 1.02 3.04-0.02 4.320.99 1.34 1.05 1.14 3.070.37 4.39-0.180.32-0.420.8-0.750.98-0.230.13-0.60.06-0.850.06h-1.85c0.06-0.370.35-0.580.57-0.860.37-0.470.67-0.980.67-1.6-0.01-1.16-1.13-1.17-1.98-1.17-1.52 0-3.3-0.22-4.07-1.72-1.34-2.590.33-5.73 2.11-7.630.7-0.75 1.68-1.33 2.28-2.15h-4.07V3.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZettlr;
