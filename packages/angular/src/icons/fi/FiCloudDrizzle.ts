import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-cloud-drizzle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiCloudDrizzle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["line",{"x1":"8","y1":"19","x2":"8","y2":"21"}],["line",{"x1":"8","y1":"13","x2":"8","y2":"15"}],["line",{"x1":"16","y1":"19","x2":"16","y2":"21"}],["line",{"x1":"16","y1":"13","x2":"16","y2":"15"}],["line",{"x1":"12","y1":"21","x2":"12","y2":"23"}],["line",{"x1":"12","y1":"15","x2":"12","y2":"17"}],["path",{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
