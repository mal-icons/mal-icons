import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-alarm-snooze",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsAlarmSnooze {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.28 3.71 1.41-1.42 3.01 3-1.41 1.42zm-10.59 0-2.99 3L2.29 5.29l2.99-3zM12 4c-4.88 0-9 4.12-9 9s4.12 9 9 9c4.88 0 9-4.12 9-9s-4.12-9-9-9zm4 13H8.13l4-6H8V9h7.87l-1.03 1.5500L11.87 15H16v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsAlarmSnooze;
