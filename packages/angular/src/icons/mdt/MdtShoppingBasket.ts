import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-shopping-basket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtShoppingBasket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m3.31 11 2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z","opacity":".3"}],["path",{"d":"M22 9h-4.79l-4.38-6.56c-0.19-0.28-0.51-0.42-0.83-0.42s-0.640.14-0.830.43L6.79 9H2c-0.55 0-1 0.45-1 1 0 0.090.010.180.040.27l2.54 9.27c0.230.84 1 1.46 1.92 1.46h13c0.92 0 1.69-0.62 1.93-1.46l2.54-9.27L23 10c0-0.55-0.45-1-1-1zM12 4.8 14.8 9H9.2L12 4.8zM18.5 19l-12.990.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtShoppingBasket;
