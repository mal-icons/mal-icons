import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-user-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuUserCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{"d":"m14.31 16.530.92-0.38"}],["path",{"d":"m15.23 13.85-0.92-0.38"}],["path",{"d":"m16.85 12.23-0.38-0.92"}],["path",{"d":"m16.85 17.77-0.380.92"}],["path",{"d":"m19.15 12.230.38-0.92"}],["path",{"d":"m19.53 18.7-0.38-0.92"}],["path",{"d":"m20.77 13.850.92-0.38"}],["path",{"d":"m20.77 16.150.920.38"}],["circle",{"cx":"18","cy":"15","r":"3"}],["circle",{"cx":"9","cy":"7","r":"4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuUserCog;
