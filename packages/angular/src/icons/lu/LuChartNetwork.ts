import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-chart-network",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuChartNetwork {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13.11 7.66 1.78 2.67"}],["path",{"d":"m14.16 12.79-3.32 1.42"}],["path",{"d":"m20 4-6.06 1.52"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{"cx":"12","cy":"6","r":"2"}],["circle",{"cx":"16","cy":"12","r":"2"}],["circle",{"cx":"9","cy":"15","r":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuChartNetwork;
