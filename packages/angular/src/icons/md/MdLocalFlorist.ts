import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-local-florist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdLocalFlorist {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.66 13.07c0.15 0 0.29-0.010.43-0.03C9.56 14.19 10.69 15 12 15s2.44-0.81 2.91-1.96a3.15 3.15 0 0 0 3.57-3.11c0-0.71-0.25-1.39-0.67-1.930.43-0.540.67-1.220.67-1.93a3.15 3.15 0 0 0-3.57-3.11C14.44 1.81 13.31 1 12 1s-2.440.81-2.91 1.96a3.15 3.15 0 0 0-3.57 3.11c0 0.710.25 1.390.67 1.93-0.430.54-0.68 1.22-0.68 1.93 0 1.73 1.41 3.14 3.15 3.14zM12 13c-0.62 0-1.12-0.49-1.14-1.1l0.12-1.09c0.320.120.660.19 1.020.19s0.71-0.07 1.03-0.19l0.11 1.09c-0.020.61-0.52 1.1-1.14 1.1zm3.34-1.93c-0.24 0-0.46-0.07-0.64-0.2l-0.81-0.57c0.55-0.450.94-1.09 1.06-1.83l0.880.42c0.40.190.660.590.66 1.03 0 0.64-0.52 1.15-1.15 1.15zm-0.65-5.94c0.2-0.130.42-0.20.65-0.20.63 0 1.140.51 1.14 1.14 0 0.44-0.250.83-0.66 1.03l-0.880.42c-0.12-0.74-0.51-1.38-1.07-1.83l0.82-0.56zM12 3c0.62 0 1.120.49 1.14 1.1l-0.11 1.09C12.71 5.07 12.36 5 12 5s-0.70.07-1.020.19l-0.12-1.09c0.02-0.610.52-1.1 1.14-1.1zM8.66 4.93c0.24 0 0.460.070.640.2l0.810.56c-0.550.45-0.94 1.09-1.06 1.83l-0.88-0.42c-0.4-0.2-0.66-0.59-0.66-1.03 0-0.630.52-1.14 1.15-1.14zM8.17 8.9l0.88-0.42c0.120.740.51 1.38 1.07 1.83l-0.810.55c-0.20.13-0.420.2-0.650.2-0.63 0-1.14-0.51-1.14-1.14-0.01-0.430.25-0.820.65-1.02zM12 22a9 9 0 0 0 9-9 9 9 0 0 0-9 9zm2.44-2.44c0.71-1.9 2.22-3.42 4.12-4.12a7.04 7.04 0 0 1-4.12 4.12zM3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9zm2.44 2.44c1.90.71 3.42 2.22 4.12 4.12a7.04 7.04 0 0 1-4.12-4.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdLocalFlorist;
