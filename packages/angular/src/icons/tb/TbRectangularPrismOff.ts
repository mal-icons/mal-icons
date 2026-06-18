import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-rectangular-prism-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRectangularPrismOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.18 8.18l-4.18 2.09c-0.62 0.36 -1 1.01 -1 1.72v5.02c0 0.71 0.38 1.36 1 1.72l4 2.01a2.02 2.02 0 0 0 2 0l7.15 -3.58m2.67 -1.34l0.18 -0.09c0.62 -0.35 1 -1.01 1 -1.72v-5.02a1.98 1.98 0 0 0 -1 -1.72l-4 -2.01a2.02 2.02 0 0 0 -2 0l-3.15 1.58"}],["path",{"d":"M9 21v-7.5"}],["path",{"d":"M9 13.5l3.05 -1.46m2.71 -1.3l5.74 -2.75"}],["path",{"d":"M3.5 11l5.5 2.5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRectangularPrismOff;
