import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-sunrise",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiSunrise {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 18a5 5 0 0 0-10 0"}],["line",{"x1":"12","y1":"2","x2":"12","y2":"9"}],["line",{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}],["line",{"x1":"1","y1":"18","x2":"3","y2":"18"}],["line",{"x1":"21","y1":"18","x2":"23","y2":"18"}],["line",{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}],["line",{"x1":"23","y1":"22","x2":"1","y2":"22"}],["polyline",{"points":"8 6 12 2 16 6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
