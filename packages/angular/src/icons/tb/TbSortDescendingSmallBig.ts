import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-sort-descending-small-big",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSortDescendingSmallBig {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 15l-3 3l-3 -3"}],["path",{"d":"M7 6v12"}],["path",{"d":"M14 18.33c0 0.37 0.3 0.67 0.67 0.67h2.67a0.67 0.67 0 0 0 0.67 -0.67v-2.67a0.67 0.67 0 0 0 -0.67 -0.67h-2.67a0.67 0.67 0 0 0 -0.67 0.67v2.67"}],["path",{"d":"M14 10.83c0 0.65 0.52 1.17 1.17 1.17h4.67c0.65 0 1.17 -0.52 1.17 -1.17v-4.67c0 -0.64 -0.52 -1.17 -1.17 -1.17h-4.67c-0.64 0 -1.17 0.52 -1.17 1.17v4.67"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSortDescendingSmallBig;
