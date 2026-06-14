import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-swords",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSwords {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{"x1":"13","x2":"19","y1":"19","y2":"13"}],["line",{"x1":"16","x2":"20","y1":"16","y2":"20"}],["line",{"x1":"19","x2":"21","y1":"21","y2":"19"}],["polyline",{"points":"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{"x1":"5","x2":"9","y1":"14","y2":"18"}],["line",{"x1":"7","x2":"4","y1":"17","y2":"20"}],["line",{"x1":"3","x2":"5","y1":"19","y2":"21"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSwords;
