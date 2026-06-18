import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-polygon-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPolygonOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M13 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6.5 9.5l1.55 -1.31"}],["path",{"d":"M14 5.5l3 1.5"}],["path",{"d":"M18.5 10l-1.18 3.32m-1.06 2.97l-0.25 0.71"}],["path",{"d":"M13.5 17.5l-7 -5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPolygonOff;
