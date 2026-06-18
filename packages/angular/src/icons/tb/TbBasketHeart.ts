import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-basket-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBasketHeart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 10l-2 -6"}],["path",{"d":"M7 10l2 -6"}],["path",{"d":"M10.5 20h-3.26a3 3 0 0 1 -2.96 -2.54l-1.25 -7.15a2 2 0 0 1 1.98 -2.3h14a2 2 0 0 1 1.98 2.3l-0.14 0.82"}],["path",{"d":"M12.6 12.09a2 2 0 0 0 -2.23 3.07"}],["path",{"d":"M18 22l3.35 -3.28a2.14 2.14 0 0 0 0.01 -3.07a2.24 2.24 0 0 0 -3.13 -0.01l-0.22 0.22l-0.22 -0.22a2.24 2.24 0 0 0 -3.13 -0.01a2.14 2.14 0 0 0 -0.01 3.07l3.36 3.3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBasketHeart;
