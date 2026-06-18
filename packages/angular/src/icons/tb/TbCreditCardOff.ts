import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-credit-card-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCreditCardOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -0.13 0.87"}],["path",{"d":"M18.87 18.87a3 3 0 0 1 -0.87 0.13h-12a3 3 0 0 1 -3 -3v-8c0 -1.35 0.89 -2.49 2.12 -2.87"}],["path",{"d":"M3 11l8 0"}],["path",{"d":"M15 11l6 0"}],["path",{"d":"M7 15l0.01 0"}],["path",{"d":"M11 15l2 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCreditCardOff;
