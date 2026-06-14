import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-clover",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuClover {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.17 7.83 2 22"}],["path",{"d":"M4.02 12a2.83 2.83 0 1 1 3.81-4.17A2.83 2.83 0 1 1 12 4.02a2.83 2.83 0 1 1 4.17 3.81A2.83 2.83 0 1 1 19.98 12a2.83 2.83 0 1 1-3.81 4.17A2.83 2.83 0 1 1 12 19.98a2.83 2.83 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{"d":"m7.83 7.83 8.34 8.34"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuClover;
