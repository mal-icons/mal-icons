import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-alarm-snooze",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxAlarmSnooze {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-4.88 0-9 4.12-9 9s4.12 9 9 9 9-4.12 9-9-4.12-9-9-9zm0 16c-3.79 0-7-3.21-7-7s3.21-7 7-7 7 3.21 7 7-3.21 7-7 7zm8.29-13.29-3.01-3 1.41-1.42 3.01 3zM6.7 3.71l-2.99 3L2.29 5.29l2.99-3z"}],["path",{"d":"M14.83 10.56A1 1 0 0 0 14 9H9v2h3.13l-2.96 4.45A1 1 0 0 0 10 17h5v-2h-3.13l2.96-4.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxAlarmSnooze;
