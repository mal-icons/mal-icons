import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-calendar-check-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCalendarCheckSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9 5 L 9 6 L 5 6 L 5 28 L 27 28 L 27 6 L 23 6 L 23 5 L 21 5 L 21 6 L 11 6 L 11 5 Z M 7 8 L 9 8 L 9 9 L 11 9 L 11 8 L 21 8 L 21 9 L 23 9 L 23 8 L 25 8 L 25 10 L 7 10 Z M 7 12 L 25 12 L 25 26 L 7 26 Z M 20.28 14.28 L 15 19.56 L 12.72 17.28 L 11.28 18.72 L 14.28 21.72 L 15 22.41 L 15.72 21.72 L 21.72 15.72 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCalendarCheckSolid;
