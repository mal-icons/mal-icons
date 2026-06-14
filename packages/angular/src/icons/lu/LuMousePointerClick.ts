import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-mouse-pointer-click",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMousePointerClick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 4.1 12 6"}],["path",{"d":"m5.1 8-2.9-0.8"}],["path",{"d":"m6 12-1.9 2"}],["path",{"d":"M7.2 2.2 8 5.1"}],["path",{"d":"M9.04 9.69a0.50.5 0 0 1 0.65-0.65l11 4.5a0.50.5 0 0 1-0.070.95l-4.35 1.04a1 1 0 0 0-0.740.74l-1.04 4.35a0.50.5 0 0 1-0.950.07z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMousePointerClick;
