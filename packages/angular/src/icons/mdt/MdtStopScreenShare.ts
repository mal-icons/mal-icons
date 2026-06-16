import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-stop-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtStopScreenShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.67 12.54C9.13 12.92 7.96 13.71 7 15c0.31-1.480.94-2.93 2.08-4.05L4.13 6.02H4v10.01h10.14l-3.47-3.49z","opacity":".3"}],["path",{"d":"m21.79 18 2 2H24v-2h-2.21zM1.11 2.98l1.55 1.56c-0.410.37-0.660.89-0.66 1.48V16c0 1.10.9 2 2.01 2H0v2h18.13l2.71 2.71 1.41-1.41L2.52 1.57 1.11 2.98zM4 6.02h0.13l4.95 4.93C7.94 12.07 7.31 13.52 7 15c0.96-1.29 2.13-2.08 3.67-2.46l3.46 3.48H4v-10zm16 0v10.19l1.3 1.3c0.42-0.370.7-0.890.7-1.49v-10a2 2 0 0 0-2-2H7.8l2 2H20zm-7.07 3.13 2.79 2.78 1.28-1.2L13 7v2.13l-0.070.02z"}],["path",{"d":"M20 6.02H9.8l3.13 3.13c0.02 0 0.04-0.010.07-0.02V7l4 3.73-1.28 1.2L20 16.21V6.02z","opacity":".3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtStopScreenShare;
