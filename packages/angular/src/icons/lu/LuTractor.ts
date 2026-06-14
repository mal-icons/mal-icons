import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-tractor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTractor {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10 11 11 0.9a1 1 0 0 1 0.8 1.1l-0.66 4.16a1 1 0 0 1-0.990.84H20"}],["path",{"d":"M16 18h-5"}],["path",{"d":"M18 5a1 1 0 0 0-1 1v5.57"}],["path",{"d":"M3 4h8.13a1 1 0 0 1 0.990.86L13 11.25"}],["path",{"d":"M4 11V4"}],["path",{"d":"M7 15h0.01"}],["path",{"d":"M8 10.1V4"}],["circle",{"cx":"18","cy":"18","r":"2"}],["circle",{"cx":"7","cy":"15","r":"5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTractor;
