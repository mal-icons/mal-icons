import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-basket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBasket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 9h-1.42l-3.71-6.5-1.740.99L17.28 9H6.72l3.15-5.5-1.74-0.99L4.42 9H3a1 1 0 0 0-0.96 1.26l2.8 10.26A2.01 2.01 0 0 0 6.76 22h10.47c0.9 0 1.69-0.6 1.93-1.47l2.8-10.26A11 0 0 0 21 9zm-3.76 11v1-1H6.76L4.31 11h15.38l-2.45 9z"}],["path",{"d":"M9 13h2v5H9zm4 0h2v5h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBasket;
