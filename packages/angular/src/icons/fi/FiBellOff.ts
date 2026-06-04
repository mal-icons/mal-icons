import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-bell-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiBellOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.73 21a2 2 0 0 1-3.46 0"}],["path",{"d":"M18.63 13A17.89 17.89 0 0 1 18 8"}],["path",{"d":"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}],["path",{"d":"M18 8a6 6 0 0 0-9.33-5"}],["line",{"x1":"1","y1":"1","x2":"23","y2":"23"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
