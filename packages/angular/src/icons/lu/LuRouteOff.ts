import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-route-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuRouteOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"6","cy":"19","r":"3"}],["path",{"d":"M9 19h8.5c0.4 0 0.9-0.1 1.3-0.2"}],["path",{"d":"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{"d":"M15 5h-4.3"}],["circle",{"cx":"18","cy":"5","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuRouteOff;
