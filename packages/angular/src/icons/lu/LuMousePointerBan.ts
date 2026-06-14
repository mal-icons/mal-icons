import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-mouse-pointer-ban",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMousePointerBan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.03 2.68a0.50.5 0 0 1 0.65-0.65l9 3.5a0.50.5 0 0 1-0.030.94L8.2 7.55a1 1 0 0 0-0.660.66l-1.07 3.44a0.50.5 0 0 1-0.940.03z"}],["circle",{"cx":"16","cy":"16","r":"6"}],["path",{"d":"m11.8 11.8 8.4 8.4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMousePointerBan;
