import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-battery-vertical-charging-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBatteryVerticalCharging2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 18v-11c0 -1.1 0.9 -2 2 -2h0.5c0.28 0 0.5 -0.22 0.5 -0.5s0.22 -0.5 0.5 -0.5h3c0.28 0 0.5 0.22 0.5 0.5s0.22 0.5 0.5 0.5h0.5c1.11 0 2 0.9 2 2v1m-10 10c0 1.11 0.9 2 2 2h1"}],["path",{"d":"M12 14h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2"}],["path",{"d":"M15 21v-3"}],["path",{"d":"M13 14v-2.5"}],["path",{"d":"M17 14v-2.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBatteryVerticalCharging2;
