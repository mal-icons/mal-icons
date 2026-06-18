import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-face",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxFace {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 2c3.21 0 5.98 1.91 7.25 4.65a7.8 7.8 0 0 1-0.89-0.5c-0.41-0.26-0.87-0.55-1.46-0.77-0.67-0.25-1.4-0.38-2.23-0.38s-1.560.12-2.230.38c-0.590.22-1.050.52-1.470.78-0.380.24-0.70.44-1.10.59C9.41 8.92 8.93 9 8.33 9c-0.59 0-1.08-0.08-1.52-0.25-0.4-0.15-0.73-0.36-1.11-0.6-0.16-0.1-0.34-0.21-0.52-0.31C6.59 5.54 9.11 4 12 4zm0 16c-4.41 0-8-3.59-8-8 0-0.810.12-1.590.35-2.330.090.060.190.110.280.170.410.260.880.55 1.470.780.670.26 1.40.38 2.230.380.83 0 1.56-0.12 2.24-0.380.59-0.22 1.05-0.52 1.47-0.780.38-0.240.7-0.44 1.1-0.590.45-0.170.93-0.25 1.53-0.25s1.080.08 1.530.25c0.40.150.730.36 1.110.60.410.260.870.55 1.460.770.360.140.750.23 1.150.290.050.360.080.720.08 1.09 0 4.41-3.59 8-8 8z"}],["circle",{"cx":"8.5","cy":"13.5","r":"1.5"}],["circle",{"cx":"15.5","cy":"13.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxFace;
