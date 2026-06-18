import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-debridlink",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDebridlink {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.23 5.55 0 5.78v2.48l0.250.25h2.91c3.16 0 3.250 3.750.15 1.050.3 1.66 1.02 1.89 2.260.050.270.060.40.06 1.03 0 0.64-0.010.77-0.06 1.04-0.26 1.4-0.98 2.15-2.31 2.38-0.250.05-0.450.05-2.140.05H2.5l-0.01-2.33-0.01-2.33-0.22-0.21H0.23L0 10.77v7.38l0.250.25h2.77c1.530 2.96-0.01 3.18-0.03 1.91-0.12 3.26-0.8 4.11-2.090.51-0.770.81-1.650.98-2.90.06-0.460.07-2.270.01-2.74-0.14-1.16-0.44-2.1-0.9-2.84-0.67-1.08-1.74-1.81-3.06-2.09-0.71-0.15-0.51-0.14-3.95-0.15Zm12.610-0.230.230.01 4.94c0.01 4.930.01 4.940.07 5.230.090.440.160.660.30.960.390.831 1.27 2.01 1.480.210.040.580.05 4.490.06l4.270.01L24 18.2v-2.49l-0.24-0.24-3.88-0.01-3.88-0.01-0.15-0.06a1.03 1.03 0 0 1-0.6-0.6c-0.13-0.35-0.13-0.26-0.13-4.78l0-4.23-0.23-0.23h-1.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDebridlink;
