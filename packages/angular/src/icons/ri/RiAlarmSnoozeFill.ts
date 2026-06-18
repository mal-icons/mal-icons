import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-alarm-snooze-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAlarmSnoozeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4C7.03 4 3 8.03 3 13ZM5.28 2.75L1.75 6.28L3.16 7.7L6.7 4.16L5.28 2.75ZM22.25 6.28L18.72 2.75L17.3 4.16L20.84 7.7L22.25 6.28ZM9 11V9H15V11.41L11.41 15H15V17H9V14.59L12.59 11H9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAlarmSnoozeFill;
