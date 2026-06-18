import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-testin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTestin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.05 9.92H3.07v5.23H1.99V9.92H0V8.84h5.05v1.08zm3.46 1.74c0.410.790.33 1.70.33 1.7H5.31c0.130.390.460.72 1.180.72h2.17v1.08H6.49c-1.03 0-1.59-0.45-1.87-0.83-0.3-0.4-0.47-0.94-0.47-1.51 0-1.160.81-2.35 2.35-2.350.90 1.620.42 2.02 1.19zm-0.890.66c-0.15-0.35-0.47-0.77-1.12-0.77-0.74 0-1.050.41-1.170.77h2.3zm4.97-0.05H10.89a0.340.34 0 0 1-0.34-0.340.40.4 0 0 1 0.12-0.280.320.32 0 0 1 0.22-0.1h2.47v-1.08h-2.44c-0.43 0-0.750.15-1.020.42a1.49 1.49 0 0 0-0.44 1.05c0 0.790.64 1.43 1.43 1.43h1.7c0.21 0 0.380.170.380.38 0 0.19-0.160.34-0.350.34H9.72v1.08h2.9c0.79 0 1.43-0.64 1.43-1.43 0-0.81-0.66-1.46-1.47-1.46zm3.84-3.43h-1.08v1.62h-1.26v1.08h1.26v1.53c0 1.09 1.12 2.08 2.35 2.08v-1.08c-0.68 0-1.26-0.55-1.26-0.99v-1.53h1.26v-1.08h-1.26V8.85zm1.98 6.31h1.08v-4.69h-1.08v4.69zm0.54-6.31a0.540.54 0 1 0 0 1.080.540.54 0 0 0 0-1.08zm3.11 1.62c-1.02 0-1.850.83-1.85 1.84v2.86h1.08v-2.86c0-0.420.34-0.750.77-0.750.44 0 0.860.370.860.76v2.86H24v-2.86c0-1-0.89-1.84-1.94-1.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTestin;
