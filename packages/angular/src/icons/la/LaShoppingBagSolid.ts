import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-shopping-bag-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShoppingBagSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 13.25 3 11 5.25 11 8 L 11 9 L 6.06 9 L 6 9.94 L 5 27.94 L 4.94 29 L 27.06 29 L 27 27.94 L 26 9.94 L 25.94 9 L 21 9 L 21 8 C 21 5.25 18.75 3 16 3 Z M 16 5 C 17.66 5 19 6.34 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34 14.34 5 16 5 Z M 7.94 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.06 11 L 24.94 27 L 7.06 27 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShoppingBagSolid;
