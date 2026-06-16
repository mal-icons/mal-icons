import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-battery-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBatteryShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M310-80q-12.75 0-21.37-8.62T280-110v-676q0-12.75 8.63-21.37T310-816h90v-64h160v64h90q12.75 0 21.38 8.63T680-786v140h-60v-110H340v616h280v-94h60v124q0 12.75-8.62 21.38T650-80H310Zm90-210v-120q0-25 17.63-42.5T460-470h221l-73-74 42-42 146 146-146 146-43-43 74-73H460v120h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBatteryShare;
