import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-apple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlApple {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.67 16.81a10.32 10.32 0 0 1-1.02 1.84c-0.540.77-0.98 1.3-1.32 1.59-0.520.48-1.090.73-1.690.74-0.43 0-0.95-0.12-1.56-0.37-0.61-0.25-1.17-0.37-1.68-0.37-0.54 0-1.110.12-1.730.37-0.620.25-1.110.38-1.490.39-0.580.03-1.15-0.23-1.73-0.76-0.37-0.32-0.83-0.87-1.38-1.65-0.59-0.83-1.07-1.79-1.45-2.89-0.41-1.19-0.61-2.33-0.61-3.45 0-1.270.28-2.370.83-3.29a4.86 4.86 0 0 1 1.73-1.75 4.65 4.65 0 0 1 2.34-0.66c0.46 0 1.060.14 1.810.42s1.230.42 1.440.42c0.16 0 0.69-0.17 1.59-0.50.85-0.31 1.57-0.43 2.16-0.38 1.60.13 2.80.76 3.6 1.9-1.430.87-2.14 2.08-2.12 3.640.01 1.210.45 2.22 1.32 3.02a4.33 4.33 0 0 0 1.320.86c-0.110.31-0.220.6-0.340.88zM16 2.38c0 0.95-0.35 1.84-1.04 2.66-0.840.98-1.85 1.54-2.94 1.45a2.96 2.96 0 0 1-0.02-0.36c0-0.910.4-1.89 1.1-2.690.35-0.40.8-0.74 1.34-1.010.54-0.26 1.05-0.41 1.54-0.430.010.130.020.260.020.38z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlApple;
