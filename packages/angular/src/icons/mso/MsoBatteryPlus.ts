import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-battery-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBatteryPlus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M310-80q-12.75 0-21.37-8.62T280-110v-676q0-12.75 8.63-21.37T310-816h90v-64h160v64h90q12.75 0 21.38 8.63T680-786v333q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28H310Zm30-60h152-25 25-152Zm310 50v-120H530v-60h120v-120h60v120h120v60H710v120h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBatteryPlus;
