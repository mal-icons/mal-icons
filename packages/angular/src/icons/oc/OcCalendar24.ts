import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-calendar-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCalendar24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.75 0a0.750.75 0 0 1 0.750.75V3h9V0.75a0.750.75 0 0 1 1.5 0V3h2.75c0.97 0 1.750.78 1.75 1.75v16a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-16C1.5 3.78 2.28 3 3.25 3H6V0.75A0.750.75 0 0 1 6.75 0ZM21 9.5H3v11.25c0 0.140.110.250.250.25h17.5a0.250.25 0 0 0 0.25-0.25Zm-17.75-5a0.250.25 0 0 0-0.250.25V8h18V4.75a0.250.25 0 0 0-0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCalendar24;
