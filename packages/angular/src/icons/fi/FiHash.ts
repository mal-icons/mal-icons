import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-hash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiHash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["line",{"x1":"4","y1":"9","x2":"20","y2":"9"}],["line",{"x1":"4","y1":"15","x2":"20","y2":"15"}],["line",{"x1":"10","y1":"3","x2":"8","y2":"21"}],["line",{"x1":"16","y1":"3","x2":"14","y2":"21"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
