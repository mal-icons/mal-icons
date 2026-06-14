import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-chart-area",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuChartArea {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{"d":"M7 11.21a0.50.5 0 0 1 0.15-0.35l2-2a0.50.5 0 0 1 0.71 0l3.29 3.29a0.50.5 0 0 0 0.71 0l4.29-4.29a0.50.5 0 0 1 0.850.35V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuChartArea;
