import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-pie-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPieChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 3.18v17.64c0 0.64-0.59 1.12-1.210.98C5.32 20.8 2 16.79 2 12s3.32-8.8 7.79-9.8a11 0 0 1 1.210.98zm2.03 0v6.81c0 0.550.45 1 1 1h6.79c0.64 0 1.12-0.590.98-1.22-0.85-3.76-3.8-6.72-7.55-7.57-0.63-0.14-1.220.34-1.220.98zm0 10.83v6.81c0 0.640.59 1.12 1.220.98 3.76-0.85 6.71-3.82 7.56-7.580.14-0.62-0.35-1.22-0.98-1.22h-6.79c-0.560.01-1.010.46-1.01 1.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPieChart;
