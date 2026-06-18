import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gitcode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGitcode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.59 4.590.49-0.27q0.030.170.060.3c0.030.160.060.290.070.420.1 1.120.67 1.94 1.46 2.13 1.170.27 2.26-0.18 2.86-1.160.71-1.180.4-2.63-0.81-3.51C16.350.06 12.65-0.61 8.660.560.07 3.1-2.87 13.65 3.23 20.12c2.61 2.77 5.92 3.96 9.68 3.87 4.82-0.11 8.29-2.51 10.5-6.67 1.57-2.95-0.14-6.18-3.4-6.85a21 21 0 0 0-5.67-0.36 4.8 4.8 0 0 0-1.80.55c-0.620.33-0.81-0.73 1.670.070.610.530.97 1.09 1.06 1.120.18 2.250.28 3.380.370.330.030.660.030.990.030.470.010.940.01 1.410.09 1.310.22 1.77 1.28 1.09 2.42a4.7 4.7 0 0 1-0.580.77 6.55 6.55 0 0 1-3.32 1.96c-2.330.57-4.670.6-6.99-0.13-2.64-0.83-4.22-2.78-4.28-5.39A9.1 9.1 0 0 1 5.76 8.91c0.36-0.650.56-1.330.5-2.07a26 26 0 0 1-0.05-0.97l-0.02-0.56q0.40.080.790.21c1.010.41 2.010.59 3.10.29a5.6 5.6 0 0 1 1.9-0.12 4.76 4.76 0 0 0 2.92-0.71c0.22-0.130.44-0.250.68-0.39"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGitcode;
