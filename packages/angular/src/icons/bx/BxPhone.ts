import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-phone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPhone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.71 12.29a11 0 0 0-1.41 0l-1.59 1.59c-0.74-0.22-2.12-0.72-2.99-1.59s-1.37-2.25-1.59-2.99l1.59-1.59a11 0 0 0 0-1.41l-4-4a11 0 0 0-1.41 0L3.58 5.01c-0.380.38-0.590.9-0.59 1.440.02 1.420.4 6.37 4.3 10.27s8.84 4.27 10.27 4.3h0.03c0.53 0 1.03-0.21 1.41-0.59l2.71-2.71a11 0 0 0 0-1.41l-4-4zm-0.13 6.71c-1.25-0.02-5.52-0.36-8.87-3.71-3.37-3.37-3.69-7.65-3.71-8.87L7 4.41 9.59 7 8.29 8.29a1 1 0 0 0-0.270.91c0.020.120.61 2.84 2.27 4.5s4.39 2.25 4.5 2.27a0.990.99 0 0 0 0.91-0.27L17 14.41 19.59 17l-2.01 2.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPhone;
