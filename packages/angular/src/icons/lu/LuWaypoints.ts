import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-waypoints",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuWaypoints {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.59 5.41-5.17 5.17"}],["path",{"d":"m18.59 13.41-5.17 5.17"}],["path",{"d":"M6 12h12"}],["circle",{"cx":"12","cy":"20","r":"2"}],["circle",{"cx":"12","cy":"4","r":"2"}],["circle",{"cx":"20","cy":"12","r":"2"}],["circle",{"cx":"4","cy":"12","r":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuWaypoints;
