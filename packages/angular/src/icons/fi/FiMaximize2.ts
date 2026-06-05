import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-maximize-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiMaximize2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"15 3 21 3 21 9"}],["polyline",{"points":"9 21 3 21 3 15"}],["line",{"x1":"21","y1":"3","x2":"14","y2":"10"}],["line",{"x1":"3","y1":"21","x2":"10","y2":"14"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
