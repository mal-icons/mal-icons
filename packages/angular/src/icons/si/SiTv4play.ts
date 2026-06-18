import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tv4play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTv4play {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.37 15.93V3.72c0-0.21-0.28-0.31-0.4-0.12L0.04 18.29a0.20.2 0 0 0-0.010.22c0.040.070.110.120.190.12h7.33v1.66c0 0.110.10.220.220.22h2.38c0.12 0 0.22-0.10.22-0.21v-1.66h1.44c0.12 0 0.22-0.10.22-0.22v-2.26a0.220.22 0 0 0-0.22-0.22zm-2.830.01H4.8l2.75-4.07zm16.31-3.74L16.7 8.06c-0.08-0.05-0.170.04-0.130.12a10.53 10.53 0 0 1 0.89 4.26c0 1.51-0.32 2.95-0.89 4.25-0.040.080.050.160.130.12l7.15-4.13a0.280.28 0 0 0 0-0.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTv4play;
