import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-personio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPersonio {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.6 24H2.47v-1.56h19.13Zm-6.17-4.04c0.560.14 1.14-0.24 1.3-0.870.17-0.62-0.16-1.25-0.71-1.39-0.56-0.14-1.140.24-1.30.87-0.170.620.16 1.250.71 1.39zM22.370.68c-1.74-1.35-5.39-0.43-8.140.58A41.71 41.71 0 0 0 5.64 5.63C3.62 6.99 1.14 8.990.75 10.81a1.43 1.43 0 0 0 0.28 1.26c0.510.59 1.350.58 1.520.57a0.780.78 0 0 0 0.51-1.370.780.78 0 0 0-0.58-0.190.880.88 0 0 1-0.18-0.02c0.58-2.14 6.69-6.23 12.47-8.34 3.86-1.41 5.96-1.34 6.65-0.810.280.220.430.490.23 1.06-0.55 1.54-3.2 3.96-7.11 6.48-0.720.47-1.430.9-2.11 1.290.54-1.92 1.1-3.88 1.58-5.56a0.780.78 0 0 0-1.5-0.43 2070.72 2070.63 0 0 0-2 7.05c-1.560.81-2.75 1.3-3.22 1.37a0.780.78 0 0 0-1.02 1.1c0.130.230.40.480.930.480.09 0 0.18-0.010.26-0.020.54-0.07 1.42-0.39 2.49-0.88-0.76 2.7-1.37 4.97-1.41 5.28a0.780.78 0 0 0 0.690.860.670.67 0 0 0 0.09 0 0.780.78 0 0 0 0.78-0.68c0.06-0.380.82-3.13 1.75-6.42a58.24 58.24 0 0 0 4.01-2.4c5.44-3.59 7.01-5.92 7.36-7.240.28-1.02-0.02-1.93-0.82-2.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPersonio;
