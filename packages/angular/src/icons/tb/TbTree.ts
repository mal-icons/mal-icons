import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-tree",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTree {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 13l-2 -2"}],["path",{"d":"M12 12l2 -2"}],["path",{"d":"M12 21v-13"}],["path",{"d":"M9.82 16a3 3 0 0 1 -2.74 -3.69a3 3 0 0 1 0.3 -4.83a3 3 0 0 1 4.62 -3.71a3 3 0 0 1 4.61 3.71a3 3 0 0 1 0.31 4.83a3 3 0 0 1 -2.92 3.7h-4l-0.18 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTree;
