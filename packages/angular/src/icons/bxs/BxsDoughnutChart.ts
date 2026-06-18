import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-doughnut-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsDoughnutChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 6c2.510.42 4.58 2.49 5 5h4c-0.47-4.72-4.28-8.53-9-9v4z"}],["path",{"d":"M18 13c-0.48 2.83-2.98 4.95-5.95 4.95-3.31 0-6-2.69-6-6C6.05 8.98 8.17 6.48 11 6V2c-5.050.5-8.95 4.77-8.95 9.95 0 5.51 4.49 10 10 10 5.18 0 9.45-3.9 9.95-8.95h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsDoughnutChart;
