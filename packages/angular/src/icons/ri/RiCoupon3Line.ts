import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-coupon-3-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCoupon3Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4C2 3.45 2.45 3 3 3H21C21.56 3 22 3.45 22 4V9.5C20.62 9.5 19.5 10.62 19.5 12C19.5 13.38 20.62 14.5 22 14.5V20C22 20.55 21.56 21 21 21H3C2.45 21 2 20.55 2 20V4ZM8.09 19C8.3 18.42 8.85 18 9.5 18C10.16 18 10.71 18.42 10.92 19H20V16.03C18.52 15.3 17.5 13.77 17.5 12C17.5 10.23 18.52 8.7 20 7.97V5H10.92C10.71 5.58 10.16 6 9.5 6C8.85 6 8.3 5.58 8.09 5H4V19H8.09ZM9.5 11C8.68 11 8 10.33 8 9.5C8 8.67 8.68 8 9.5 8C10.33 8 11 8.67 11 9.5C11 10.33 10.33 11 9.5 11ZM9.5 16C8.68 16 8 15.33 8 14.5C8 13.67 8.68 13 9.5 13C10.33 13 11 13.67 11 14.5C11 15.33 10.33 16 9.5 16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCoupon3Line;
