import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-shopping-cart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfShoppingCart {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.75 12.5c-0.96 0-1.75 0.79-1.75 1.75s0.79 1.75 1.75 1.75 1.75-0.78 1.75-1.75-0.78-1.75-1.75-1.75zM2.75 15c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.75 0.75-0.75 0.75 0.34 0.75 0.75-0.34 0.75-0.75 0.75zM11.25 12.5c-0.96 0-1.75 0.79-1.75 1.75s0.79 1.75 1.75 1.75 1.75-0.78 1.75-1.75-0.78-1.75-1.75-1.75zM11.25 15c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.75 0.75-0.75 0.75 0.34 0.75 0.75-0.34 0.75-0.75 0.75zM13.37 2l-0.3 2h-13.14l1.12 8.04h11.91l1.04-7.46 0.24-1.57h2.77v-1h-3.63zM12.93 5l-0.14 1h-11.57l-0.14-1h11.85zM1.91 11.04l-0.56-4.04h11.3l-0.56 4.04h-10.17z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfShoppingCart;
