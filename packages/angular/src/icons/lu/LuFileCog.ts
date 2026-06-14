import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-file-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuFileCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.70.71l3.59 3.59A2.4 2.4 0 0 1 20 8z"}],["path",{"d":"M20 8v12a2 2 0 0 1-2 2h-4.18"}],["path",{"d":"m3.31 19.530.92-0.38"}],["path",{"d":"M4 10.59V4a2 2 0 0 1 2-2h8"}],["path",{"d":"m4.23 16.85-0.92-0.38"}],["path",{"d":"m5.85 15.23-0.38-0.92"}],["path",{"d":"m5.85 20.77-0.380.92"}],["path",{"d":"m8.15 15.230.38-0.92"}],["path",{"d":"m8.53 21.7-0.38-0.92"}],["path",{"d":"m9.77 16.850.92-0.38"}],["path",{"d":"m9.77 19.150.920.38"}],["circle",{"cx":"7","cy":"18","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuFileCog;
