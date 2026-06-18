import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-coupon-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCoupon2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 9.5V4C2 3.45 2.45 3 3 3H21C21.56 3 22 3.45 22 4V9.5C20.62 9.5 19.5 10.62 19.5 12C19.5 13.38 20.62 14.5 22 14.5V20C22 20.55 21.56 21 21 21H3C2.45 21 2 20.55 2 20V14.5C3.39 14.5 4.5 13.38 4.5 12C4.5 10.62 3.39 9.5 2 9.5ZM14 5H4V7.97C5.49 8.7 6.5 10.23 6.5 12C6.5 13.77 5.49 15.3 4 16.03V19H14V5ZM16 5V19H20V16.03C18.52 15.3 17.5 13.77 17.5 12C17.5 10.23 18.52 8.7 20 7.97V5H16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCoupon2Line;
