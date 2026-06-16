import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-shopping-basket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrShoppingBasket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 9h-4.79l-4.39-6.57a1 1 0 0 0-1.66 0L6.77 9H2c-0.55 0-1 0.45-1 1 0 0.090.010.180.040.27l2.54 9.27c0.230.84 1 1.46 1.92 1.46h13c0.92 0 1.69-0.62 1.93-1.46l2.54-9.27L23 10c0-0.55-0.45-1-1-1zM11.99 4.79 14.8 9H9.18l2.81-4.21zM12 17c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrShoppingBasket;
