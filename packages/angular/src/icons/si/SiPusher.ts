import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pusher",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPusher {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 23.97v-6.02a0.030.03 0 1.02-0.03l7.73-4.46a0.030.03 0 0.02-0.03v-1.71a0.040.04 0 0-0.05-0.03l-7.66 4.42a0.040.04 0 1-0.05-0.03v-1.71a0.040.04 0 1.02-0.03l7.73-4.46a0.040.04 0 0.02-0.03v-1.71a0.040.04 0 0-0.05-0.03l-7.66 4.42a0.040.04 0 1-0.05-0.03v-1.71a0.030.03 0 1.02-0.03l7.73-4.46a0.040.04 0 0.02-0.03V4.51a0.080.08 0 0-0.04-0.06L12.040.01a0.070.07 0 0-0.07 0L10.50.86a0.040.04 0 0 0.06L18.16 5.34a0.040.04 0 10 0.06l-1.460.85a0.080.08 0 1-0.07 0L8.93 1.8a0.080.08 0 0-0.08 0l-1.460.84a0.040.04 0 0 0.06l7.66 4.42a0.040.04 0 10 0.06l-1.460.85a0.080.08 0 1-0.08 0l-7.69-4.44a0.080.08 0 0-0.08 0l-1.510.88v15.05a0.030.03 0 0.020.03l1.480.86a0.040.04 0 0.05-0.03V5.43a0.040.04 0 1.05-0.03l1.480.86a0.040.04 0 1.020.03v15.03a0.040.04 0 0.020.03l1.480.86a0.040.04 0 0.05-0.03V7.23a0.040.04 0 1.05-0.03l1.480.86a0.040.04 0 1.020.03v15.03a0.040.04 0 0.020.03l1.490.86A0.040.04 0 12 23.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPusher;
