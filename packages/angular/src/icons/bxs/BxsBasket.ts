import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-basket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBasket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.13 2.5 4.42 9H3a1 1 0 0 0-0.96 1.26l2.8 10.26A2 2 0 0 0 6.76 22h10.47c0.9 0 1.69-0.6 1.93-1.47l2.8-10.26A11 0 0 0 21 9h-1.42l-3.71-6.5-1.740.99L17.28 9H6.72l3.15-5.5-1.74-0.99zM14 13h2v5h-2v-5zm-6 0h2v5H8v-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBasket;
