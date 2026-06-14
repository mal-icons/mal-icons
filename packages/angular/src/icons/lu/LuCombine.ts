import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-combine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuCombine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{"d":"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{"d":"m7 15 3 3"}],["path",{"d":"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{"x":"14","y":"14","width":"7","height":"7","rx":"1"}],["rect",{"x":"3","y":"3","width":"7","height":"7","rx":"1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuCombine;
