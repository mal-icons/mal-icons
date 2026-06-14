import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-octagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuOctagon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.59 16.73A2 2 0 0 1 2 15.31V8.69a2 2 0 0 1 0.59-1.41l4.69-4.69A2 2 0 0 1 8.69 2h6.62a2 2 0 0 1 1.410.59l4.69 4.69A2 2 0 0 1 22 8.69v6.62a2 2 0 0 1-0.59 1.41l-4.69 4.69a2 2 0 0 1-1.410.59H8.69a2 2 0 0 1-1.41-0.59z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuOctagon;
