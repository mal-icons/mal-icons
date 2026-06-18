import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-tether",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandTether {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.08 20.19c-1.15 1.08 -3.02 1.08 -4.17 0l-6.93 -6.55c-0.96 -0.91 -1.27 -2.62 -0.69 -3.83l2.4 -5.02c0.47 -0.99 1.72 -1.79 2.78 -1.79h9.06c1.06 0 2.31 0.8 2.78 1.79l2.4 5.02c0.58 1.21 0.26 2.93 -0.69 3.83c-3.45 3.29 -3.47 3.28 -6.94 6.55"}],["path",{"d":"M12 15v-7"}],["path",{"d":"M8 8h8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandTether;
