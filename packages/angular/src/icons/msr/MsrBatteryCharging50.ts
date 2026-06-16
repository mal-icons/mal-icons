import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-battery-charging-50",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBatteryCharging50 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M460-400v122q0 6 6 7.5t8-4.5l77-184q3-8-1-14.5t-12-6.5h-38v-123q0-6-6-7t-8 5l-77 184q-3 8 1.25 14.5T423-400h37ZM310-80q-12.75 0-21.37-8.62T280-110v-676q0-12.75 8.63-21.37T310-816h90v-34q0-12.75 8.63-21.37T430-880h100q12.75 0 21.38 8.63T560-850v34h90q12.75 0 21.38 8.63T680-786v676q0 12.75-8.62 21.38T650-80H310Zm30-60h280v-616H340v616Zm0 0h280-280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBatteryCharging50;
