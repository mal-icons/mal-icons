import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-buildings",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBuildings {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15"}],["path",{"d":"M16 8h2c1 0 2 1 2 2v11"}],["path",{"d":"M3 21h18"}],["path",{"d":"M10 12v0.01"}],["path",{"d":"M10 16v0.01"}],["path",{"d":"M10 8v0.01"}],["path",{"d":"M7 12v0.01"}],["path",{"d":"M7 16v0.01"}],["path",{"d":"M7 8v0.01"}],["path",{"d":"M17 12v0.01"}],["path",{"d":"M17 16v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBuildings;
