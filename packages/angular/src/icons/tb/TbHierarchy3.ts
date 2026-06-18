import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-hierarchy-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHierarchy3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M18 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M2 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 17l2 -3"}],["path",{"d":"M9 10l2 -3"}],["path",{"d":"M13 7l2 3"}],["path",{"d":"M17 14l2 3"}],["path",{"d":"M15 14l-2 3"}],["path",{"d":"M9 14l2 3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHierarchy3;
