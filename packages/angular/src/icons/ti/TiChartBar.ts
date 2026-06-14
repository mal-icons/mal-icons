import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-chart-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiChartBar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 4c0-1.1-0.9-2-2-2s-2 0.9-2 2v12h4v-12zM19 8c0-1.1-0.9-2-2-2s-2 0.9-2 2v8h4v-8zM9 11c0-1.1-0.9-2-2-2s-2 0.9-2 2v5h4v-5zM19 19h-14c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiChartBar;
