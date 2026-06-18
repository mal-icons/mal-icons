import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nikon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNikon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.27 8.68c-0.69 0-1.050.46-1.050.87 0 0.140.030.650.950.650.76 0 1.06-0.49 1.06-0.85 0-0.24-0.2-0.67-0.95-0.67zm-6.870.22L0 15.15h1.72c0.19-1 0.46-2.060.71-3.14l1.21 3.14H5.27L6.68 8.9H5l-0.71 3.18-1.18-3.18Zm8.590L8.6 15.14h1.66l0.56-2.370.7 2.38h1.71l-0.71-2.51 1.72-2.08h-1.91l-1.38 1.660.74-3.32zm6.61 1.47c-2.58 0-2.96 2.01-3.03 2.38-0.190.930.02 2.14 1.24 2.460.80.21 2.050.19 2.86-0.470.74-0.6 1.1-1.62 1.09-2.57-0.01-0.92-0.79-1.79-2.14-1.79zm6.190.07c-0.570.04-1.160.35-1.490.810.04-0.190.09-0.40.14-0.66h-1.7l-1 4.56h1.7l0.56-2.59c0.1-0.480.49-0.680.83-0.590.150.040.350.150.280.55l-0.57 2.63h1.67l0.77-3.51a0.960.96 0 0 0-0.63-1.14 1.59 1.59 0 0 0-0.56-0.06zm-15.660.12-1.02 4.59h1.68l1.02-4.59zm9.23 1.1c0.3700.470.220.440.43-0.090.55-0.24 1.08-0.36 1.54-0.080.25-0.320.4-0.60.4-0.29 0-0.46-0.18-0.43-0.410.04-0.380.29-1.360.36-1.550.12-0.330.45-0.410.6-0.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNikon;
