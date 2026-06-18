import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-calendar-schedule-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCalendarScheduleFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 1V3H3C2.45 3 2 3.45 2 4V20C2 20.55 2.45 21 3 21H10.75C9.66 19.63 9 17.89 9 16C9 11.58 12.58 8 17 8C18.89 8 20.63 8.66 22 9.75V4C22 3.45 21.55 3 21 3H17V1H15V3H9V1H7ZM23 16C23 19.31 20.31 22 17 22C13.69 22 11 19.31 11 16C11 12.69 13.69 10 17 10C20.31 10 23 12.69 23 16ZM16 12V16.41L18.29 18.71L19.71 17.29L18 15.59V12H16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCalendarScheduleFill;
