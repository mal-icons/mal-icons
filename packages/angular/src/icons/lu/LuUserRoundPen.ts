import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-user-round-pen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuUserRoundPen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 21a8 8 0 0 1 10.82-7.49"}],["path",{"d":"M21.38 16.63a1 1 0 0 0-3-3l-4.01 4.01a2 2 0 0 0-0.510.85l-0.84 2.87a0.50.5 0 0 0 0.620.62l2.87-0.84a2 2 0 0 0 0.85-0.51z"}],["circle",{"cx":"10","cy":"8","r":"5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuUserRoundPen;
