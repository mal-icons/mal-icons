import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-drone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuDrone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 10 7 7"}],["path",{"d":"m10 14-3 3"}],["path",{"d":"m14 10 3-3"}],["path",{"d":"m14 14 3 3"}],["path",{"d":"M14.21 4.14a4 4 0 1 1 5.44 5.86"}],["path",{"d":"M19.64 14a4 4 0 1 1-5.43 5.87"}],["path",{"d":"M4.37 10a4 4 0 1 1 5.44-5.86"}],["path",{"d":"M9.8 19.86a4 4 0 1 1-5.43-5.87"}],["rect",{"x":"10","y":"8","width":"4","height":"8","rx":"1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuDrone;
