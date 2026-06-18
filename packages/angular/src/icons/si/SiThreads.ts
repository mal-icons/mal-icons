import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-threads",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiThreads {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.19 24h-0.01c-3.58-0.02-6.33-1.2-8.18-3.51C2.35 18.44 1.5 15.59 1.47 12.01v-0.02c0.03-3.580.88-6.43 2.53-8.48C5.85 1.21 8.60.02 12.18 0h0.01c2.750.02 5.040.73 6.83 2.1 1.68 1.29 2.86 3.13 3.51 5.47l-2.040.57c-1.1-3.96-3.9-5.98-8.3-6.01-2.910.02-5.110.94-6.54 2.72C4.31 6.5 3.62 8.91 3.59 12c0.03 3.090.72 5.5 2.06 7.16 1.43 1.78 3.63 2.7 6.54 2.72 2.62-0.02 4.36-0.63 5.8-2.04 1.65-1.61 1.62-3.59 1.09-4.8-0.31-0.71-0.87-1.3-1.63-1.75-0.19 1.35-0.62 2.45-1.28 3.27-0.89 1.1-2.14 1.7-3.73 1.79-1.20.07-2.36-0.22-3.26-0.8-1.06-0.69-1.68-1.74-1.75-2.96-0.06-1.190.41-2.28 1.33-3.080.88-0.76 2.12-1.21 3.58-1.29a13.85 13.85 0 0 1 3.020.14c-0.13-0.74-0.37-1.33-0.75-1.76-0.51-0.59-1.31-0.88-2.36-0.89h-0.03c-0.84 0-1.990.23-2.72 1.32L7.73 7.85c0.98-1.45 2.57-2.26 4.48-2.26h0.04c3.190.02 5.1 1.98 5.29 5.390.110.050.220.090.320.14 1.490.7 2.58 1.76 3.15 3.070.8 1.820.87 4.79-1.55 7.16-1.85 1.81-4.09 2.63-7.28 2.65Zm1-11.69c-0.24 0-0.490.01-0.740.02-1.840.1-2.980.95-2.92 2.140.07 1.26 1.45 1.84 2.78 1.77 1.22-0.06 2.82-0.54 3.09-3.71a10.5 10.5 0 0 0-2.21-0.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiThreads;
