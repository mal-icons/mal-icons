import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-calendar-times-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCalendarTimesSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9 5 L 9 6 L 5 6 L 5 28 L 27 28 L 27 6 L 23 6 L 23 5 L 21 5 L 21 6 L 11 6 L 11 5 Z M 7 8 L 9 8 L 9 9 L 11 9 L 11 8 L 21 8 L 21 9 L 23 9 L 23 8 L 25 8 L 25 10 L 7 10 Z M 7 12 L 25 12 L 25 26 L 7 26 Z M 13.22 14.78 L 11.78 16.22 L 14.56 19 L 11.78 21.78 L 13.22 23.22 L 16 20.44 L 18.78 23.22 L 20.22 21.78 L 17.44 19 L 20.22 16.22 L 18.78 14.78 L 16 17.56 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCalendarTimesSolid;
