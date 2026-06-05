import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-cloud-snow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
export class FiCloudSnow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}],["line",{"x1":"8","y1":"16","x2":"8.01","y2":"16"}],["line",{"x1":"8","y1":"20","x2":"8.01","y2":"20"}],["line",{"x1":"12","y1":"18","x2":"12.01","y2":"18"}],["line",{"x1":"12","y1":"22","x2":"12.01","y2":"22"}],["line",{"x1":"16","y1":"16","x2":"16.01","y2":"16"}],["line",{"x1":"16","y1":"20","x2":"16.01","y2":"20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
