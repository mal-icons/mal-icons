import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-svgdotjs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSvgdotjs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 12 12 0 0 12l12 12 12-12Zm-18.57-0.55 4.67-4.66c0.34-0.60.84-1.26 1.57-1.98a0.480.48 0 0 1 0.68 0c0.190.190.190.49 0 0.68-1.25 1.25-1.79 2.24-1.84 3.09-0.040.590.17 1.10.49 1.570.360.540.85 1.03 1.35 1.52 1.13 1.13 2.21 2.29 2.12 3.83-0.010.26-0.060.53-0.150.81l4-4a0.610.61 0 0 1-0.07-0.29c0-0.350.28-0.630.63-0.63s0.630.280.630.63-0.280.63-0.630.63a0.610.61 0 0 1-0.29-0.07l-4.66 4.67c-0.330.6-0.84 1.26-1.56 1.98a0.480.48 0 0 1-0.68 0 0.480.48 0 0 1 0-0.68c1.25-1.25 1.79-2.24 1.84-3.090.04-0.59-0.17-1.1-0.49-1.57-0.36-0.54-0.85-1.03-1.35-1.52-1.13-1.13-2.21-2.29-2.12-3.830.02-0.260.06-0.520.15-0.81l-4 4c0.050.090.070.190.070.29 0 0.35-0.280.63-0.630.63A0.630.63 0 0 1 4.51 12c0-0.350.28-0.630.63-0.630.11 0 0.210.030.290.07Zm-0.290.3c0.14 0 0.260.120.260.26 0 0.14-0.110.26-0.260.26A0.260.26 0 0 1 4.88 12c0-0.140.12-0.260.26-0.26Zm13.72 0c0.14 0 0.260.120.260.26 0 0.14-0.110.26-0.260.26a0.260.26 0 0 1-0.26-0.26c0-0.140.12-0.260.26-0.26Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSvgdotjs;
