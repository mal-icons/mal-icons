import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-sliders",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiSliders {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["line",{"x1":"4","y1":"21","x2":"4","y2":"14"}],["line",{"x1":"4","y1":"10","x2":"4","y2":"3"}],["line",{"x1":"12","y1":"21","x2":"12","y2":"12"}],["line",{"x1":"12","y1":"8","x2":"12","y2":"3"}],["line",{"x1":"20","y1":"21","x2":"20","y2":"16"}],["line",{"x1":"20","y1":"12","x2":"20","y2":"3"}],["line",{"x1":"1","y1":"14","x2":"7","y2":"14"}],["line",{"x1":"9","y1":"8","x2":"15","y2":"8"}],["line",{"x1":"17","y1":"16","x2":"23","y2":"16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
