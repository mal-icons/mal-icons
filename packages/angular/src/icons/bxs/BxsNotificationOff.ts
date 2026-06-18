import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-notification-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsNotificationOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"18","cy":"6","r":"3"}],["path",{"d":"M20 18v-7.42A4.96 4.96 0 0 1 18 11a5 5 0 0 1-5-5c0-0.710.15-1.390.42-2H6c-0.18 0-0.350.03-0.510.08L3.71 2.29 2.29 3.71l18 18 1.41-1.41-1.78-1.78c0.05-0.160.08-0.330.08-0.51zM4 18c0 1.10.9 2 2 2h9.88L4 8.12V18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsNotificationOff;
