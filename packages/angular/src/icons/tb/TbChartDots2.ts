import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chart-dots-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChartDots2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3v18h18"}],["path",{"d":"M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M21 3l-6 1.5"}],["path",{"d":"M14.11 6.65l2.77 3.7"}],["path",{"d":"M16 12.5l-5 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChartDots2;
