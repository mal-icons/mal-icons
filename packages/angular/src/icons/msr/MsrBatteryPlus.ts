import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-battery-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBatteryPlus {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M310-80q-12.75 0-21.37-8.62T280-110v-676q0-12.75 8.63-21.37T310-816h90v-34q0-12.75 8.63-21.37T430-880h100q12.75 0 21.38 8.63T560-850v34h90q12.75 0 21.38 8.63T680-786v333q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28H310Zm30-60h152-25 25-152Zm310-70h-90q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T560-270h90v-90q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T710-360v90h90q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T800-210h-90v90q0 12.75-8.68 21.38Q692.65-90 679.83-90 667-90 658.5-98.62T650-120v-90Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBatteryPlus;
