import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-car-turbine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCarTurbine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M18.86 11c0.09 0.66 0.14 1.51 0.14 2a8 8 0 1 1 -8 -8h6"}],["path",{"d":"M11 9c2.49 0.11 4.49 0.11 6 0"}],["path",{"d":"M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -6"}],["path",{"d":"M11 13l-3.5 -1.5"}],["path",{"d":"M11 13l2.5 3"}],["path",{"d":"M8.5 16l2.5 -3"}],["path",{"d":"M11 13l3.5 -1.5"}],["path",{"d":"M11 9v4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCarTurbine;
