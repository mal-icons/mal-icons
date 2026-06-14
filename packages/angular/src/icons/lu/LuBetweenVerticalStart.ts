import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-between-vertical-start",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBetweenVerticalStart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"width":"7","height":"13","x":"3","y":"8","rx":"1"}],["path",{"d":"m15 2-3 3-3-3"}],["rect",{"width":"7","height":"13","x":"14","y":"8","rx":"1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBetweenVerticalStart;
