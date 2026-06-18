import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-drops",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandDrops {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.64 7.42a7.91 7.91 0 0 1 1.76 8.67a8 8 0 0 1 -7.4 4.92a8 8 0 0 1 -7.4 -4.92a7.91 7.91 0 0 1 1.76 -8.67l5.64 -5.42l5.64 5.42"}],["path",{"d":"M14.47 10.92a3.6 3.6 0 0 1 0.77 3.88a3.5 3.5 0 0 1 -3.24 2.2a3.5 3.5 0 0 1 -3.24 -2.2a3.6 3.6 0 0 1 0.77 -3.88l2.47 -2.42l2.47 2.42"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandDrops;
