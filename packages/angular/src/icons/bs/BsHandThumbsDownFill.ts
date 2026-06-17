import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-hand-thumbs-down-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHandThumbsDownFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.96 14.53c0.070.940.95 1.66 1.91 1.42l0.26-0.06a1.38 1.38 0 0 0 1.01-0.96c0.22-0.820.53-2.510.06-4.51q0.210.030.440.05c0.710.07 1.670.07 2.52-0.210.52-0.170.99-0.68 1.2-1.27a1.9 1.9 0 0 0-0.23-1.73c0.06-0.120.1-0.240.14-0.360.08-0.270.11-0.570.11-0.86 0-0.29-0.04-0.59-0.11-0.86a2 2 0 0 0-0.16-0.4c0.17-0.390.11-0.820-1.15a3.2 3.2 0 0 0-0.49-0.9c0.05-0.150.08-0.310.08-0.46a1.86 1.86 0 0 0-0.25-0.91C13.10.76 12.440.28 11.50.28H8c-0.6 0-1.070.08-1.470.22a4.8 4.8 0 0 0-0.970.49l-0.050.03c-0.50.31-10.61-2.070.72C2.68 1.82 2 2.43 2 3.28v4c0 0.850.69 1.43 1.36 1.620.850.23 1.570.79 2.13 1.410.560.630.91 1.28 1.04 1.640.20.570.36 1.540.43 2.59"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHandThumbsDownFill;
