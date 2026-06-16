import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-downhill-skiing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDownhillSkiing {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 4.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2zm-2.72 16.40.760.27c0.620.21 1.270.33 1.960.33a6 6 0 0 0 1.95-0.33c0.27-0.090.57-0.020.780.18a0.750.75 0 0 1-0.3 1.24c-0.760.27-1.580.41-2.430.41-0.86 0-1.68-0.14-2.45-0.41L2.7 17.72a0.740.74 0 0 1-0.45-0.95c0.14-0.390.57-0.60.96-0.45l6.19 2.25 1.72-4.44-3.57-3.73A2 2 0 0 1 8 7.28l3.48-2.01c1.1-0.64 2.52-0.1 2.91 1.11l0.33 1.08a5.02 5.02 0 0 0 2.83 3.14l0.29-0.89a0.750.75 0 1 1 1.420.47l-0.6 1.85c-0.170.52-0.720.82-1.240.65A7.03 7.03 0 0 1 13 8.58l-2.53 1.45 2.23 2.55c0.490.560.63 1.340.36 2.04l-1.78 4.63 3.09 1.12 2.1-6.44c0.460.180.940.31 1.440.41l-2.13 6.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDownhillSkiing;
