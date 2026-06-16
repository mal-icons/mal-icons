import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-rotate-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRotateLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.56 7.98C6.1 7.52 5.31 7.6 5 8.17c-0.280.51-0.5 1.03-0.67 1.58-0.190.630.31 1.250.96 1.25h0.01c0.43 0 0.82-0.280.94-0.70.12-0.40.28-0.790.48-1.170.22-0.370.15-0.84-0.16-1.15zM5.31 13h-0.02c-0.65 0-1.150.62-0.96 1.250.160.540.38 1.070.66 1.580.310.57 1.110.66 1.570.20.3-0.310.38-0.770.17-1.15-0.2-0.37-0.36-0.76-0.48-1.16a0.970.97 0 0 0-0.94-0.72zm2.85 6.02c0.510.28 1.040.5 1.590.660.620.18 1.24-0.32 1.24-0.96v-0.03c0-0.43-0.28-0.82-0.7-0.94-0.4-0.12-0.78-0.28-1.15-0.48a0.970.97 0 0 0-1.160.17l-0.030.03c-0.450.45-0.36 1.240.21 1.55zM13 4.07v-0.66c0-0.89-1.08-1.34-1.71-0.71L9.17 4.83c-0.40.4-0.4 1.04 0 1.43l2.13 2.08c0.630.62 1.70.17 1.7-0.72V6.09c2.840.48 5 2.94 5 5.91 0 2.73-1.82 5.02-4.32 5.75a0.970.97 0 0 0-0.680.94v0.02c0 0.650.61 1.14 1.230.96A7.98 7.98 0 0 0 20 12c0-4.08-3.05-7.44-7-7.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRotateLeft;
