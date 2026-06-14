import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-traffic-cone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTrafficCone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.05 10.97a5 2.5 0 0 1-8.1 0"}],["path",{"d":"m16.92 14.05 4.48 2.04a1 1 0 0 1 0 1.83l-8.57 3.9a2 2 0 0 1-1.66 0l-8.57-3.91a1 1 0 0 1 0-1.83l4.48-2.04"}],["path",{"d":"M16.95 14.14a5 2.5 0 1 1-9.9 0L10.06 3.5a2 2 0 0 1 3.87 0z"}],["path",{"d":"M9.19 6.57a5 2.5 0 0 0 5.61 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTrafficCone;
