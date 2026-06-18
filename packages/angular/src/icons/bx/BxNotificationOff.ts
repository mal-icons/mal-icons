import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-notification-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxNotificationOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.71 20.3-1.79-1.79c0.05-0.160.08-0.330.08-0.51v-7h-2v5.59L7.41 6H13V4H6c-0.18 0-0.350.03-0.510.08l-1.78-1.78L2.3 3.71l18 18 1.41-1.41zM4 8.12V18c0 1.10.9 2 2 2h9.88l-2-2H6v-7.88l-2-2z"}],["circle",{"cx":"18","cy":"6","r":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxNotificationOff;
