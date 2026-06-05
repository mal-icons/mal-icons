import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-monitor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiMonitor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"x":"2","y":"3","width":"20","height":"14","rx":"2","ry":"2"}],["line",{"x1":"8","y1":"21","x2":"16","y2":"21"}],["line",{"x1":"12","y1":"17","x2":"12","y2":"21"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
