import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-blade",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBlade {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.71 3.71l2.59 2.59a1 1 0 0 1 0 1.41l-0.59 0.59a1 1 0 0 0 0 1.41l0.59 0.59a1 1 0 0 1 0 1.41l-8.59 8.59a1 1 0 0 1 -1.41 0l-0.59 -0.59a1 1 0 0 0 -1.41 0l-0.59 0.59a1 1 0 0 1 -1.41 0l-2.59 -2.59a1 1 0 0 1 0 -1.41l0.59 -0.59a1 1 0 0 0 0 -1.41l-0.59 -0.59a1 1 0 0 1 0 -1.41l8.59 -8.59a1 1 0 0 1 1.41 0l0.59 0.59a1 1 0 0 0 1.41 0l0.59 -0.59a1 1 0 0 1 1.41 0"}],["path",{"d":"M8 16l3.2 -3.2"}],["path",{"d":"M12.8 11.2l3.2 -3.2"}],["path",{"d":"M14 8l2 2"}],["path",{"d":"M8 14l2 2"}],["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBlade;
