import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-calendar-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCalendarCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.23 16.85-0.92-0.38"}],["path",{"d":"m15.23 19.15-0.920.38"}],["path",{"d":"M16 2v4"}],["path",{"d":"m16.47 14.310.380.92"}],["path",{"d":"m16.85 20.77-0.380.92"}],["path",{"d":"m19.15 15.230.38-0.92"}],["path",{"d":"m19.53 21.7-0.38-0.92"}],["path",{"d":"m20.77 16.850.92-0.38"}],["path",{"d":"m20.77 19.150.920.38"}],["path",{"d":"M21 10.59V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}],["circle",{"cx":"18","cy":"18","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCalendarCog;
