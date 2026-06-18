import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-wordpress",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandWordpress {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 9h3"}],["path",{"d":"M4 9h2.5"}],["path",{"d":"M11 9l3 11l4 -9"}],["path",{"d":"M5.5 9l3.5 11l3 -7"}],["path",{"d":"M18 11c0.18 -0.53 1 -1.36 1 -2.5c0 -1.78 -0.78 -2.5 -1.87 -2.5c-0.9 0 -1.12 0.81 -1.12 1.43c0 1.83 2 2.06 2 3.57"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandWordpress;
