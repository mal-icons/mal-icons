import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-shopping-cart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrShoppingCart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 18c-1.1 0-1.990.9-1.99 2S5.9 22 7 22s2-0.9 2-2-0.9-2-2-2zM1 3c0 0.550.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c0.55 0 1-0.45 1-1s-0.45-1-1-1H7l1.1-2h7.45c0.75 0 1.41-0.41 1.75-1.03l3.58-6.49A11 0 0 0 20.01 4H5.21l-0.67-1.43a0.990.99 0 0 0-0.9-0.57H2c-0.55 0-1 0.45-1 1zm16 15c-1.1 0-1.990.9-1.99 2s0.89 2 1.99 2 2-0.9 2-2-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrShoppingCart;
