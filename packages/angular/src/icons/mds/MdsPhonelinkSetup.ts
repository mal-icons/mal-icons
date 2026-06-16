import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-phonelink-setup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPhonelinkSetup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 1v5h2V4h10v16H9v-2H7v5h14V1zm2.5 14.5c0.29-0.120.55-0.290.8-0.48l-0.020.03 1.410.55 1.27-2.2-1.18-0.95-0.020.03c0.02-0.160.05-0.320.05-0.48s-0.03-0.32-0.05-0.48l0.020.03 1.18-0.95-1.26-2.2-1.410.550.020.03c-0.26-0.19-0.52-0.36-0.81-0.48L9.27 7H6.73L6.5 8.5c-0.290.12-0.550.29-0.80.48l0.02-0.03L4.3 8.4l-1.27 2.2 1.180.950.02-0.03c-0.010.16-0.040.32-0.040.48s0.030.320.050.48l-0.02-0.03-1.180.95 1.27 2.2 1.41-0.55-0.02-0.03c0.250.190.510.360.80.48l0.23 1.5h2.54l0.23-1.5zM6 12c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPhonelinkSetup;
