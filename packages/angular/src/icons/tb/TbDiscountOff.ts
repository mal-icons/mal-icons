import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-discount-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDiscountOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 15l3 -3m2 -2l1 -1"}],["path",{"d":"M9.15 9.15a0.5 0.5 0 0 0 0.35 0.86a0.5 0.5 0 0 0 0.35 -0.14"}],["path",{"d":"M14.15 14.15a0.5 0.5 0 0 0 0.35 0.86a0.5 0.5 0 0 0 0.35 -0.14"}],["path",{"d":"M5.64 5.63a9 9 0 1 0 12.72 12.74m1.68 -2.32a9 9 0 0 0 -12.07 -12.1"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDiscountOff;
