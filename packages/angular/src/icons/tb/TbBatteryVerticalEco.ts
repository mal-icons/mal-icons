import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-battery-vertical-eco",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBatteryVerticalEco {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 18v-11c0 -1.1 0.9 -2 2 -2h0.5c0.28 0 0.5 -0.22 0.5 -0.5s0.22 -0.5 0.5 -0.5h3c0.28 0 0.5 0.22 0.5 0.5s0.22 0.5 0.5 0.5h0.5c1.11 0 2 0.9 2 2v1m-8 12c-1.1 0 -2 -0.89 -2 -2"}],["path",{"d":"M13 17.14c0 -2.84 2.09 -5.14 4.67 -5.14h2.33v0.86c0 2.84 -2.09 5.14 -4.67 5.14h-2.33l0 -0.86"}],["path",{"d":"M13 21v-3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBatteryVerticalEco;
