import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-binary-tree-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBinaryTree2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M12 8v8"}],["path",{"d":"M6.32 12.5l4.37 -4.99"}],["path",{"d":"M17.68 12.5l-4.37 -4.99"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBinaryTree2;
