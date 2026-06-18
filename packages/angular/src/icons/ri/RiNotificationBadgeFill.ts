import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-notification-badge-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNotificationBadgeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.34 4C13.12 4.63 13 5.3 13 6C13 9.31 15.69 12 19 12C19.7 12 20.37 11.88 21 11.66V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V5C3 4.45 3.45 4 4 4H13.34ZM19 10C16.79 10 15 8.21 15 6C15 3.79 16.79 2 19 2C21.21 2 23 3.79 23 6C23 8.21 21.21 10 19 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNotificationBadgeFill;
