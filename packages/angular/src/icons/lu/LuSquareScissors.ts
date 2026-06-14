import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-square-scissors",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSquareScissors {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["circle",{"cx":"8.5","cy":"8.5","r":"1.5"}],["line",{"x1":"9.56","y1":"9.56","x2":"12","y2":"12"}],["line",{"x1":"17","y1":"17","x2":"14.82","y2":"14.82"}],["circle",{"cx":"8.5","cy":"15.5","r":"1.5"}],["line",{"x1":"9.56","y1":"14.44","x2":"17","y2":"7"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSquareScissors;
