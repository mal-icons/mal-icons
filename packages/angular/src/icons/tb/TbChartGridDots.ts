import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chart-grid-dots",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChartGridDots {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M8 18h8"}],["path",{"d":"M18 20v1"}],["path",{"d":"M18 3v1"}],["path",{"d":"M6 20v1"}],["path",{"d":"M6 10v-7"}],["path",{"d":"M12 3v18"}],["path",{"d":"M18 8v8"}],["path",{"d":"M8 12h13"}],["path",{"d":"M21 6h-1"}],["path",{"d":"M16 6h-13"}],["path",{"d":"M3 12h1"}],["path",{"d":"M20 18h1"}],["path",{"d":"M3 18h1"}],["path",{"d":"M6 14v2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChartGridDots;
