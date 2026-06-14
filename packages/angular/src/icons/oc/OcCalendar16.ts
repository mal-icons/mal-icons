import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-calendar-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCalendar16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.75 0a0.750.75 0 0 1 0.750.75V2h5V0.75a0.750.75 0 0 1 1.5 0V2h1.25c0.97 0 1.750.78 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.78 1.78 2 2.75 2H4V0.75A0.750.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 0.140.110.250.250.25h10.5a0.250.25 0 0 0 0.25-0.25V7.5Zm10.75-4H2.75a0.250.25 0 0 0-0.250.25V6h11V3.75a0.250.25 0 0 0-0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCalendar16;
