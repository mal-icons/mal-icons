import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-shopping-cart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsShoppingCart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 18c-1.1 0-1.990.9-1.99 2s0.89 2 1.99 2 2-0.9 2-2-0.9-2-2-2zM7 18c-1.1 0-1.990.9-1.99 2S5.9 22 7 22s2-0.9 2-2-0.9-2-2-2zm0-3 1.1-2h7.45c0.75 0 1.41-0.41 1.75-1.03L21.7 4H5.21l-0.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsShoppingCart;
