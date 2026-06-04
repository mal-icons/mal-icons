import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-sun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiSun {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"5"}],["line",{"x1":"12","y1":"1","x2":"12","y2":"3"}],["line",{"x1":"12","y1":"21","x2":"12","y2":"23"}],["line",{"x1":"4.22","y1":"4.22","x2":"5.64","y2":"5.64"}],["line",{"x1":"18.36","y1":"18.36","x2":"19.78","y2":"19.78"}],["line",{"x1":"1","y1":"12","x2":"3","y2":"12"}],["line",{"x1":"21","y1":"12","x2":"23","y2":"12"}],["line",{"x1":"4.22","y1":"19.78","x2":"5.64","y2":"18.36"}],["line",{"x1":"18.36","y1":"5.64","x2":"19.78","y2":"4.22"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
