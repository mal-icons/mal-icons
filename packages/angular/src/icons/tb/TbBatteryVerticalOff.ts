import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-battery-vertical-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBatteryVerticalOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M17 13v-6a2 2 0 0 0 -2 -2h-0.5a0.5 0.5 0 0 1 -0.5 -0.5a0.5 0.5 0 0 0 -0.5 -0.5h-3a0.5 0.5 0 0 0 -0.5 0.5a0.5 0.5 0 0 1 -0.5 0.5h-0.5m-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBatteryVerticalOff;
