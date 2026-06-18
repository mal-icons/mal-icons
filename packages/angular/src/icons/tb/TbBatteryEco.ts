import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-battery-eco",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBatteryEco {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v0.5a0.5 0.5 0 0 0 0.5 0.5a0.5 0.5 0 0 1 0.5 0.5v3a0.5 0.5 0 0 1 -0.5 0.5a0.5 0.5 0 0 0 -0.5 0.5v0.5a2 2 0 0 1 -2 2h-5.5"}],["path",{"d":"M3 16.14c0 -2.84 2.09 -5.14 4.67 -5.14h2.33v0.86c0 2.84 -2.09 5.14 -4.67 5.14h-2.33v-0.86"}],["path",{"d":"M3 20v-3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBatteryEco;
