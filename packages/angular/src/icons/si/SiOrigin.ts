import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-origin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOrigin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.59 3.11a8.78 8.78 0 13.420.92 8.78 8.78 0 12.71 2.09 9.11 9.11 0 11.72 2.96 8.65 8.65 0 1.47 3.5 8.22 8.22 0 1-0.31 1.85 9.17 9.17 0 1-0.67 1.7 19.96 19.96 0 1-1.47 2.41 17.61 17.61 0 1-1.76 2.12 18.61 18.61 0 1-4.29 3.28l-0.040.03a0.20.2 0 1-0.110.020.290.29 0 1-0.16-0.10.270.27 0 1-0.06-0.17c0-0.030-0.060.01-0.08a0.190.19 0 1.04-0.06c0.28-0.390.51-0.810.69-1.24a5.42 5.42 0 0.37-1.360.120.12 0 0-0.04-0.080.110.11 0 0-0.08-0.04 9.15 9.15 0 1-0.790.06 4.93 4.93 0 1-0.8-0.04 8.82 8.82 0 1-6.12-3.01 9.09 9.09 0 1-1.71-2.96 8.66 8.66 0 1-0.46-3.5 8.22 8.22 0 1.31-1.85 8.6 8.6 0 1.68-1.68c0.44-0.860.93-1.68 1.47-2.44a18.04 18.04 0 11.76-2.12A18.8 18.8 0 111.610.05l0.04-0.02a0.190.19 0 1.11-0.020.30.3 0 1.160.10.260.26 0 1.060.170.240.24 0 1-0.010.080.160.16 0 1-0.040.06 6.45 6.45 0 0-0.69 1.24c-0.180.43-0.30.89-0.37 1.36 0 0.030.010.060.040.09a0.120.12 0 0.090.04c0.26-0.030.53-0.050.8-0.060.27-0.010.5400.80.03zm-0.81 12.37a3.32 3.32 0 2.52-0.85c0.72-0.64 1.11-1.44 1.18-2.4a3.36 3.36 0 0-0.86-2.53 3.29 3.29 0 0-2.4-1.16 3.36 3.36 0 0-2.530.86 3.3 3.3 0 0-1.16 2.4 3.38 3.38 0 0.85 2.54c0.630.73 1.43 1.12 2.41 1.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOrigin;
