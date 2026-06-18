import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-frustum-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFrustumOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.72 3.73l3.48 -1.56a1.95 1.95 0 0 1 1.59 0l4.5 2.01c0.55 0.25 0.96 0.74 1.11 1.33l2.54 10.16c0.1 0.41 0.07 0.83 -0.07 1.21m-2.3 1.7l-5.72 2.74a1.95 1.95 0 0 1 -1.68 0l-7.03 -3.36a1.99 1.99 0 0 1 -1.06 -2.28l2.52 -10.08"}],["path",{"d":"M18 4.82l-5.2 2.32a1.96 1.96 0 0 1 -1.6 0"}],["path",{"d":"M12 7.32v0.68m0 4v9.5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFrustumOff;
