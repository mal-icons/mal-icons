import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-remove-shopping-cart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdRemoveShoppingCart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.41 1.13 0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-0.160.28-0.250.61-0.250.96 0 1.10.9 2 2 2h7.46l1.38 1.38A2 2 0 0 0 17 22c0.67 0 1.26-0.33 1.62-0.84L21.46 24l1.41-1.41L1.41 1.13zM7 15l1.1-2h2.36l2 2H7zM20 4H7.12l2 2h9.19l-2.76 5h-1.44l1.94 1.94c0.54-0.140.99-0.49 1.25-0.97l3.58-6.49C21.25 4.82 20.76 4 20 4zM7 18c-1.1 0-1.990.9-1.99 2S5.9 22 7 22s2-0.9 2-2-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdRemoveShoppingCart;
