import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-aperture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiAperture {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"14.31","y1":"8","x2":"20.05","y2":"17.94"}],["line",{"x1":"9.69","y1":"8","x2":"21.17","y2":"8"}],["line",{"x1":"7.38","y1":"12","x2":"13.12","y2":"2.06"}],["line",{"x1":"9.69","y1":"16","x2":"3.95","y2":"6.06"}],["line",{"x1":"14.31","y1":"16","x2":"2.83","y2":"16"}],["line",{"x1":"16.62","y1":"12","x2":"10.88","y2":"21.94"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
