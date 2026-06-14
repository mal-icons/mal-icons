import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-chart-pie-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiChartPieOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.23 7.61l0.56-0.56c0.4-0.40.61-0.940.58-1.5-0.03-0.56-0.29-1.08-0.72-1.44-2.13-1.77-4.71-2.85-7.47-3.1l-0.18-0.01c-0.5 0-0.980.19-1.350.52-0.410.38-0.650.92-0.65 1.48v2.23c-3.660.87-6.33 4.19-6.33 8.01 0 4.55 3.69 8.24 8.22 8.24 1.59 0 3.11-0.48 4.44-1.340.280.140.580.230.90.23l0.110c0.57-0.03 1.1-0.3 1.45-0.75 1.42-1.78 2.2-4.02 2.2-6.30-2.03-0.62-4.03-1.77-5.7zm-7.34 11.87c-3.44 0-6.22-2.79-6.22-6.24 0-3.14 2.32-5.73 5.33-6.16v6.41l4.61 4.75c-1.040.78-2.32 1.25-3.72 1.25zm0.11-7.45v-9.02c2.410.22 4.61 1.17 6.37 2.64l-6.37 6.38zm0.21 1.27l5.02-5.03c1.1 1.39 1.77 3.14 1.77 5.04 0 1.91-0.66 3.67-1.77 5.05l-5.02-5.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiChartPieOutline;
