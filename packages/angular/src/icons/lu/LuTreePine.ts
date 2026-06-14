import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-tree-pine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTreePine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17 14 3 3.3a1 1 0 0 1-0.7 1.7H4.7a1 1 0 0 1-0.7-1.7L7 14h-0.3a1 1 0 0 1-0.7-1.7L9 9h-0.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-0.8 1.7H15l3 3.3a1 1 0 0 1-0.7 1.7H17Z"}],["path",{"d":"M12 22v-3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTreePine;
