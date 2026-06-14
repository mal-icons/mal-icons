import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-telescope",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTelescope {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.07 12.49-6.18 1.32a0.930.93 0 0 1-1.11-0.7l-0.54-2.15a1.07 1.07 0 0 1 0.69-1.26l13.5-4.44"}],["path",{"d":"m13.56 11.75 4.33-0.92"}],["path",{"d":"m16 21-3.1-6.21"}],["path",{"d":"M16.49 5.94a2 2 0 0 1 1.46-2.42l1.09-0.27a1 1 0 0 1 1.210.73l1.52 6.06a1 1 0 0 1-0.73 1.21l-1.090.27a2 2 0 0 1-2.42-1.45z"}],["path",{"d":"m6.16 8.63 1.11 4.46"}],["path",{"d":"m8 21 3.11-6.21"}],["circle",{"cx":"12","cy":"13","r":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTelescope;
