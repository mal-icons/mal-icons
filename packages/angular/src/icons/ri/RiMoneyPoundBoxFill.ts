import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-money-pound-box-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMoneyPoundBoxFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.56 3 22 3.45 22 4V20C22 20.56 21.56 21 21 21H3C2.45 21 2 20.56 2 20V4C2 3.45 2.45 3 3 3ZM9 13V15H8V17H16V15H11V13H14V11H11V10C11 9.17 11.68 8.5 12.5 8.5C13.03 8.5 13.5 8.78 13.76 9.19L15.75 8.69C15.23 7.41 13.97 6.5 12.5 6.5C10.57 6.5 9 8.07 9 10V11H8V13H9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMoneyPoundBoxFill;
