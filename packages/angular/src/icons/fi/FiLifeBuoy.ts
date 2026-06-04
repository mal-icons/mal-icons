import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-life-buoy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiLifeBuoy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"10"}],["circle",{"cx":"12","cy":"12","r":"4"}],["line",{"x1":"4.93","y1":"4.93","x2":"9.17","y2":"9.17"}],["line",{"x1":"14.83","y1":"14.83","x2":"19.07","y2":"19.07"}],["line",{"x1":"14.83","y1":"9.17","x2":"19.07","y2":"4.93"}],["line",{"x1":"14.83","y1":"9.17","x2":"18.36","y2":"5.64"}],["line",{"x1":"4.93","y1":"19.07","x2":"9.17","y2":"14.83"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
