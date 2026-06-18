import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-tools-kitchen-2-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbToolsKitchen2Off {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.39 10.41c0.53 -2.28 1.77 -4.69 4.61 -7.41v12m-4 0h-1c0 -0.31 0 -0.63 0 -0.94"}],["path",{"d":"M19 19v2h-1v-3"}],["path",{"d":"M8 8v13"}],["path",{"d":"M5 5v2a3 3 0 0 0 4.55 2.57m1.45 -2.57v-3"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbToolsKitchen2Off;
