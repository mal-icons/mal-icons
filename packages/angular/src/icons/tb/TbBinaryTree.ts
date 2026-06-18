import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-binary-tree",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBinaryTree {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M5.06 18.31l2.88 -4.61"}],["path",{"d":"M10.06 10.3l2.88 -4.6"}],["path",{"d":"M10.07 13.71l2.88 4.6"}],["path",{"d":"M15.06 5.7l2.88 4.61"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBinaryTree;
