import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-behance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBehance {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.97 16.93a2.56 2.56 0 0 0 1.90.68 2.5 2.5 0 0 0 1.53-0.47c0.36-0.230.64-0.580.78-0.99h2.59a5.09 5.09 0 0 1-1.9 2.9 5.29 5.29 0 0 1-3.090.88 5.84 5.84 0 0 1-2.28-0.43 4.87 4.87 0 0 1-1.72-1.21 5.66 5.66 0 0 1-1.08-1.87 7.06 7.06 0 0 1-0.38-2.39c0-0.80.13-1.590.4-2.35a5.31 5.31 0 0 1 5.09-3.6 4.87 4.87 0 0 1 2.380.56c0.660.36 1.230.87 1.67 1.49a6.2 6.2 0 0 1 0.94 2.13c0.190.820.26 1.670.21 2.51h-7.7c-0.060.790.18 1.570.69 2.19ZM6.95 4.08a8.07 8.07 0 0 1 1.930.2 4.29 4.29 0 0 1 1.490.64c0.420.30.750.710.96 1.180.240.580.36 1.20.34 1.83a3.51 3.51 0 0 1-0.51 1.96 3.73 3.73 0 0 1-1.5 1.29 3.59 3.59 0 0 1 2.03 1.44c0.460.750.7 1.620.67 2.49a4.59 4.59 0 0 1-0.42 2.03 3.95 3.95 0 0 1-1.16 1.41 5.11 5.11 0 0 1-1.680.81 7.14 7.14 0 0 1-1.930.26H0V4.08h6.95Zm-0.23 12.9c0.3100.62-0.030.92-0.1a2.18 2.18 0 0 0 0.77-0.33c0.23-0.160.41-0.370.53-0.620.14-0.320.21-0.660.19-1.01a2.08 2.08 0 0 0-0.64-1.71 2.62 2.62 0 0 0-1.7-0.5h-3.54v4.28h3.47Zm13.64-5.97a2.13 2.13 0 0 0-1.65-0.62 2.34 2.34 0 0 0-1.160.26 2.47 2.47 0 0 0-0.740.62 2.36 2.36 0 0 0-0.40.79c-0.070.24-0.120.49-0.140.73h4.77a3.24 3.24 0 0 0-0.68-1.78l00Zm-13.81-0.65a2.25 2.25 0 0 0 1.42-0.43c0.4-0.350.61-0.880.56-1.41a1.92 1.92 0 0 0-0.18-0.89 1.3 1.3 0 0 0-0.49-0.53 1.85 1.85 0 0 0-0.71-0.27 3.97 3.97 0 0 0-0.83-0.07H3.24v3.63h3.29v-0.01ZM21.62 5.12h-5.98v1.53h5.98V5.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBehance;
