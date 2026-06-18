import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-redbubble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRedbubble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.63 16.32h-3.2a0.320.32 0 0 1-0.32-0.32V7.97a0.320.32 0 0 1 0.32-0.32H16.4c2.23 0 2.69 1.31 2.69 2.41 0 0.64-0.17 1.14-0.5 1.510.820.34 1.26 1.1 1.26 2.19 0 1.6-1.2 2.56-3.21 2.56m-4.64 0H5.35a0.320.32 0 0 1-0.32-0.32V7.97a0.320.32 0 0 1 0.32-0.32h3.1c1.94 0 3.1 1.04 3.1 2.79 0 1.16-0.58 2.08-1.53 2.45l2.21 2.9a0.320.32 0 0 1-0.240.53M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12c6.63 0 12-5.37 12-12S18.63 0 12 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRedbubble;
