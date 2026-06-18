import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-trowel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTrowel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.42 9.06l-5.36 5.36a1.98 1.98 0 0 1 -3.27 -0.77l-2.68 -8.04a1.98 1.98 0 0 1 2.5 -2.5l8.05 2.68a1.98 1.98 0 0 1 0.77 3.27"}],["path",{"d":"M10 10l6.5 6.5"}],["path",{"d":"M19.35 16.58l1.08 1.08a1.96 1.96 0 0 1 -2.77 2.77l-1.08 -1.08a1.96 1.96 0 0 1 2.77 -2.77"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTrowel;
