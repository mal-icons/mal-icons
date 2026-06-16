import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-notifications-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNotificationsOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22c1.1 0 2-0.9 2-2h-4a2 2 0 0 0 2 2zm6-11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18c-0.240.06-0.470.15-0.690.23L18 13.1V11zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.73 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNotificationsOff;
