import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-move",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FiMove {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"5 9 2 12 5 15"}],["polyline",{"points":"9 5 12 2 15 5"}],["polyline",{"points":"15 19 12 22 9 19"}],["polyline",{"points":"19 9 22 12 19 15"}],["line",{"x1":"2","y1":"12","x2":"22","y2":"12"}],["line",{"x1":"12","y1":"2","x2":"12","y2":"22"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FiMove;
