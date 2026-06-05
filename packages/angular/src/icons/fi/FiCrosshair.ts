import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-crosshair",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiCrosshair {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"22","y1":"12","x2":"18","y2":"12"}],["line",{"x1":"6","y1":"12","x2":"2","y2":"12"}],["line",{"x1":"12","y1":"6","x2":"12","y2":"2"}],["line",{"x1":"12","y1":"22","x2":"12","y2":"18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
