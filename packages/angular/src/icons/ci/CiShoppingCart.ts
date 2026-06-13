import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-shopping-cart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiShoppingCart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.44,19.93c0,0.55 -0.45,1 -1,1c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1Zm-11.22,-4.27l-0.94,-10.9c-0.03,-0.39 -0.36,-0.69 -0.75,-0.69l-0.97,0c-0.28,0 -0.5,-0.22 -0.5,-0.5c0,-0.28 0.22,-0.5 0.5,-0.5l0.97,0c0.92,0 1.68,0.7 1.75,1.62l0.14,1.82l13.03,0c0.89,0 1.58,0.76 1.49,1.64l-0.67,7.52c-0.12,1.29 -1.2,2.27 -2.49,2.27l-9.07,0c-1.29,0 -2.37,-0.98 -2.49,-2.27Zm0.27,-8.16l0.72,8.07c0.07,0.77 0.72,1.36 1.49,1.36l9.07,0c0.77,0 1.42,-0.59 1.49,-1.36l0.67,-7.52c0.03,-0.29 -0.2,-0.55 -0.5,-0.55l-12.95,0Zm4.45,12.42c0,0.55 -0.45,1 -1,1c-0.55,0 -1,-0.45 -1,-1c0,-0.55 0.45,-1 1,-1c0.55,0 1,0.45 1,1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiShoppingCart;
