import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 10.27 7 3.34"}],["path",{"d":"m11 13.73-4 6.93"}],["path",{"d":"M12 22v-2"}],["path",{"d":"M12 2v2"}],["path",{"d":"M14 12h8"}],["path",{"d":"m17 20.66-1-1.73"}],["path",{"d":"m17 3.34-1 1.73"}],["path",{"d":"M2 12h2"}],["path",{"d":"m20.66 17-1.73-1"}],["path",{"d":"m20.66 7-1.73 1"}],["path",{"d":"m3.34 17 1.73-1"}],["path",{"d":"m3.34 7 1.73 1"}],["circle",{"cx":"12","cy":"12","r":"2"}],["circle",{"cx":"12","cy":"12","r":"8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCog;
