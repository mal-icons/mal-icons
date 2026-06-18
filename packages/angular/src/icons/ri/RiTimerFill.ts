import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-timer-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTimerFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.62 5.97L19.07 4.51L20.49 5.93L19.03 7.38C20.26 8.92 21 10.88 21 13C21 17.97 16.97 22 12 22C7.03 22 3 17.97 3 13C3 8.03 7.03 4 12 4C14.13 4 16.08 4.74 17.62 5.97ZM11 8V14H13V8H11ZM8 1H16V3H8V1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTimerFill;
