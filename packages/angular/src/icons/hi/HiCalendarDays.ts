import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-calendar-days",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiCalendarDays {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h0.01v0.01H12v-0.01ZM12 15h0.01v0.01H12V15Zm0 2.25h0.01v0.01H12v-0.01ZM9.75 15h0.01v0.01H9.75V15Zm0 2.25h0.01v0.01H9.75v-0.01ZM7.5 15h0.01v0.01H7.5V15Zm0 2.25h0.01v0.01H7.5v-0.01Zm6.75-4.5h0.01v0.01h-0.01v-0.01Zm0 2.25h0.01v0.01h-0.01V15Zm0 2.25h0.01v0.01h-0.01v-0.01Zm2.25-4.5h0.01v0.01H16.5v-0.01Zm0 2.25h0.01v0.01H16.5V15Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiCalendarDays;
