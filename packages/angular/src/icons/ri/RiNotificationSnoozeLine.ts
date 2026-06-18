import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-notification-snooze-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNotificationSnoozeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 17H20V10C20 5.58 16.42 2 12 2C7.58 2 4 5.58 4 10V17H2V19H22V17ZM18 10V17H6V10C6 6.69 8.69 4 12 4C15.31 4 18 6.69 18 10ZM15 23V21H9V23H15ZM9 9H12.59L9 12.59V15H15V13H11.41L15 9.41V7H9V9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNotificationSnoozeLine;
