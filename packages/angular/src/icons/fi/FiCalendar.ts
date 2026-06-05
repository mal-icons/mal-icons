import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-calendar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiCalendar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"x":"3","y":"4","width":"18","height":"18","rx":"2","ry":"2"}],["line",{"x1":"16","y1":"2","x2":"16","y2":"6"}],["line",{"x1":"8","y1":"2","x2":"8","y2":"6"}],["line",{"x1":"3","y1":"10","x2":"21","y2":"10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
