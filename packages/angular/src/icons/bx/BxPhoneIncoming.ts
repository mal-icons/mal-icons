import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-phone-incoming",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPhoneIncoming {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.71 13.29a11 0 0 0-1.41 0l-1.6 1.6c-0.82-0.24-2.17-0.77-2.99-1.6-0.87-0.87-1.37-2.25-1.59-2.99l1.59-1.59a11 0 0 0 0-1.41l-4-4a1.03 1.03 0 0 0-1.41 0l-2.71 2.71c-0.380.38-0.60.9-0.59 1.440.02 1.420.4 6.37 4.3 10.27C10.2 21.6 15.14 21.98 16.57 22h0.03c0.53 0 1.03-0.21 1.41-0.59l2.71-2.71a11 0 0 0 0-1.41l-4-4zM16.59 20c-1.25-0.02-5.52-0.36-8.87-3.71C4.34 12.92 4.02 8.64 4 7.41l2-2L8.59 8 7.3 9.29c-0.240.24-0.340.58-0.270.910.020.120.61 2.84 2.27 4.5s4.39 2.25 4.5 2.27a0.990.99 0 0 0 0.91-0.27l1.29-1.29 2.59 2.59L16.59 20z"}],["path",{"d":"M15.8 6.79 13.01 4v7H20l-2.79-2.79 4.5-4.5-1.41-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPhoneIncoming;
