import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hitachi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHitachi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.79 11.41h-1.03a0.850.85 0 0-0.05-0.280.710.71 0 0-0.46-0.43 1.42 1.42 0 0-0.910.020.890.89 0 0-0.530.54 2.32 2.32 0 0-0.04 1.430.880.88 0 0.540.58 1.49 1.49 0 0.980.030.710.71 0 0.43-0.380.980.98 0 0.08-0.4h1.03a2.2 2.2 0 1-0.050.35c-0.090.37-0.350.67-0.680.81a3.25 3.25 0 1-2.250.1c-0.48-0.15-0.89-0.49-1.05-0.96a2.38 2.38 0 1-0.13-0.79c0-0.390.07-0.760.25-1.080.19-0.320.49-0.570.84-0.7a3.06 3.06 0 12.320.06 1.2 1.2 0 1.70.85c0.020.080.030.160.030.24zm-3.98 2.44H12.72l-0.32-0.79h-1.83c00-0.310.79-0.320.79h-1.09l1.73-3.69c0 0 1.2 0 1.2 0l1.73 3.69zm5.480h-0.98s0.01-3.69 0-3.69h0.98v1.48h1.98c0 0.010-1.48 0-1.48h0.98s0 3.69 0 3.69h-0.98v-1.63c0 0.01-1.98 0-1.98 0 00.01 0 1.62 0 1.63zm-18.31 0H0s0.01-3.69 0-3.69h0.98s0 1.49 0 1.48h1.98c0 0.010-1.48 0-1.48h0.98s0 3.69 0 3.69h-0.98v-1.63c0 0.01-1.98 0-1.98 0 0 0.010 1.63 0 1.63zm7.530h-0.98v-3.06H6.04s0-0.63 0-0.63c00 3.97 0 3.97 0v0.63H8.51v3.07zm-3.8-3.69h0.98v3.69h-0.98v-3.69zm18.31 0H24v3.69h-0.98v-3.69zm-11.540.63l-0.68 1.68h1.36l-0.68-1.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHitachi;
