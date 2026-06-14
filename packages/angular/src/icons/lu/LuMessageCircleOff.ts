import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-message-circle-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMessageCircleOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2 2 20 20"}],["path",{"d":"M4.93 4.93a10 10 0 0 0-1.94 11.41 2 2 0 0 1 0.09 1.17l-1.06 3.29a1 1 0 0 0 1.24 1.17l3.41-1a2 2 0 0 1 1.10.09 10 10 0 0 0 11.3-1.99"}],["path",{"d":"M8.35 2.69A10 10 0 0 1 21.3 15.65"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMessageCircleOff;
