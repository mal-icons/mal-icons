import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-coupon-4-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCoupon4Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10C10 4.1 10.9 5 12 5C13.11 5 14 4.1 14 3H21C21.56 3 22 3.45 22 4V20C22 20.55 21.56 21 21 21H14C14 19.9 13.11 19 12 19C10.9 19 10 19.9 10 21ZM6 8V16H8V8H6ZM16 8V16H18V8H16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCoupon4Fill;
