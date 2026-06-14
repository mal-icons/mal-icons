import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-columns-3-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuColumns3Cog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"}],["path",{"d":"m14.3 19.6 1-0.4"}],["path",{"d":"M15 3v7.5"}],["path",{"d":"m15.2 16.9-0.9-0.3"}],["path",{"d":"m16.6 21.70.3-0.9"}],["path",{"d":"m16.8 15.3-0.4-1"}],["path",{"d":"m19.1 15.20.3-0.9"}],["path",{"d":"m19.6 21.7-0.4-1"}],["path",{"d":"m20.7 16.8 1-0.4"}],["path",{"d":"m21.7 19.4-0.9-0.3"}],["path",{"d":"M9 3v18"}],["circle",{"cx":"18","cy":"18","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuColumns3Cog;
