import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-unread-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcUnread16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 3.5H1.75a0.250.25 0 0 0-0.250.25v0.32L8 7.88l3.02-1.77a0.750.75 0 0 1 0.76 1.3L8.38 9.4a0.750.75 0 0 1-0.76 0L1.5 5.81v6.44c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25v-4.5a0.750.75 0 0 1 1.5 0v4.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25V4.51a0.750.75 0 0 1 0-0.03V3.75C0 2.780.78 2 1.75 2h8.75a0.750.75 0 0 1 0 1.5Z"}],["path",{"d":"M14 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcUnread16;
