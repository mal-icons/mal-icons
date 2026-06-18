import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-rectangular-prism-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRectangularPrismPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12.5v-3.51a1.98 1.98 0 0 0 -1 -1.72l-4 -2.01a2.02 2.02 0 0 0 -2 0l-10 5.01c-0.62 0.36 -1 1.01 -1 1.72v5.02c0 0.71 0.38 1.36 1 1.72l4 2.01a2.02 2.02 0 0 0 2 0l2.06 -1.03"}],["path",{"d":"M9 21v-7.5"}],["path",{"d":"M9 13.5l11.5 -5.5"}],["path",{"d":"M3.5 11l5.5 2.5"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRectangularPrismPlus;
