import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-timer-flash-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTimerFlashLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.38 5.97C7.92 4.74 9.87 4 12 4C14.13 4 16.08 4.74 17.62 5.97L19.07 4.51L20.49 5.93L19.03 7.38C20.26 8.92 21 10.88 21 13C21 17.97 16.97 22 12 22C7.03 22 3 17.97 3 13C3 10.88 3.74 8.92 4.97 7.38L3.51 5.93L4.93 4.51L6.38 5.97ZM12 20C15.87 20 19 16.87 19 13C19 9.13 15.87 6 12 6C8.13 6 5 9.13 5 13C5 16.87 8.13 20 12 20ZM13 12H16L11 18.5V14H8L13 7.5V12ZM8 1H16V3H8V1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTimerFlashLine;
