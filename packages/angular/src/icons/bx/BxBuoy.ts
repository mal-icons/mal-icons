import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-buoy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBuoy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm7.41 7H16v0.03A5.04 5.04 0 0 0 14.97 8H15V4.59A8.04 8.04 0 0 1 19.41 9zM12 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm1-10.93v3.03a4.99 4.99 0 0 0-2 0V4.07c0.33-0.040.66-0.07 1-0.07s0.670.03 1 0.07zm-4 0.52V8h0.03A5.04 5.04 0 0 0 8 9.03V9H4.59C5.4 7 7 5.4 9 4.59zM4.07 11h3.03a5 5 0 0 0 0 2H4.07C4.03 12.67 4 12.34 4 12s0.03-0.670.07-1zm0.52 4H8v-0.03c0.280.380.620.72 1 1v3.44A8.04 8.04 0 0 1 4.59 15zM11 19.93v-3.03a4.99 4.99 0 0 0 2 0v3.03c-0.330.04-0.660.07-1 0.07s-0.67-0.03-1-0.07zm4-0.52v-3.44a5.04 5.04 0 0 0 1-1V15h3.41A8.04 8.04 0 0 1 15 19.41zM19.93 13h-3.03a5 5 0 0 00-2h3.03c0.040.330.070.660.07 1s-0.030.67-0.07 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBuoy;
