import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZap {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.14 14.1a0.170.17 0 0 1 0.09-0.27l1.72-0.42c0.13-0.040.14-0.170.12-0.23a0.170.17 0 0 0-0.02-0.04L13.07 8.16c-0.07-0.1-0.03-0.230.07-0.27l1.34-0.43a0.170.17 0 0 0 0.08-0.26L9.560.08a0.150.15 0 0 0-0.19-0.07L0.1 4.03a0.170.17 0 0 0-0.030.29l5.17 3.67a0.160.16 0 0 1 0.070.15c00.06-0.050.11-0.060.11l-0.040.02-1.210.53a0.170.17 0 0 0-0.090.1v0.04a0.180.18 0 0 0 0.070.15c1.77 1.28 3.55 2.56 5.33 3.840.110.080.070.24-0.040.29l-1.580.62c-0.130.05-0.140.23-0.020.3l13.11 7.57c0.150.060.29-0.110.2-0.24l-5.82-7.38zm0.15-7.4a1.07 1.07 0 0 1 0.140.93 1.04 1.04 0 0 1-0.670.66l-0.360.12 3.32 4.19a1.05 1.05 0 0 1-0.57 1.67l-0.620.15 4.48 5.68A11.68 11.68 0 0 0 12.320.63c-0.41 0-0.820.02-1.240.06zM7.21 14.93a1.05 1.05 0 0 1 0.14-1.88l0.38-0.15L3.46 9.81a1.05 1.05 0 0 1 0.19-1.81l0.06-0.03-1.69-1.19a11.68 11.68 0 0 0 17.1 15.02Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZap;
