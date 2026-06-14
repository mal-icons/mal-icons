import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-truck-electric",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuTruckElectric {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 19V7a2 2 0 0 0-2-2H9"}],["path",{"d":"M15 19H9"}],["path",{"d":"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-0.22-0.62L18.3 9.38a1 1 0 0 0-0.78-0.38H14"}],["path",{"d":"M2 13v5a1 1 0 0 0 1 1h2"}],["path",{"d":"M4 3 2.15 5.15a0.50.5 0 0 0 0.350.86h2.15a0.470.47 0 0 1 0.350.86L3 9.02"}],["circle",{"cx":"17","cy":"19","r":"2"}],["circle",{"cx":"7","cy":"19","r":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuTruckElectric;
