import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-stacked-bar-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStackedBarChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 20c1.1 0 2-0.9 2-2V9H4v9c0 1.10.9 2 2 2zM4 8h4V6c0-1.1-0.9-2-2-2s-2 0.9-2 2v2zm6 3h4V9c0-1.1-0.9-2-2-2s-2 0.9-2 2v2zm6 1v2h4v-2c0-1.1-0.9-2-2-2s-2 0.9-2 2zm2 8c1.1 0 2-0.9 2-2v-3h-4v3c0 1.10.9 2 2 2zm-6 0c1.1 0 2-0.9 2-2v-6h-4v6c0 1.10.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStackedBarChart;
