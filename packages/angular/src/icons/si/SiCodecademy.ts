import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-codecademy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCodecademy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.83 19.73h-5.59c-0.09 0-0.170.06-0.170.17v1.52c0 0.090.060.170.170.17h5.59c0.1 0 0.17-0.040.17-0.16v-1.51c0-0.1-0.06-0.17-0.17-0.17v-0.01zM16.46 2.46c0.020.030.030.070.050.12v18.79c0 0.06-0.020.1-0.040.11a0.170.17 0 1-0.130.06H0.15c-0.04 0-0.07 0-0.1-0.02A0.180.18 0 10 21.39V2.56c0-0.080.04-0.130.1-0.15h16.24c0.04 0 0.10.020.120.03v0.02zM1.82 19.57c0 0.070.040.140.10.15h12.64c0.06-0.020.1-0.080.1-0.15V4.4c0-0.07-0.04-0.13-0.1-0.15H1.92c-0.060.02-0.10.07-0.10.15l0 15.17zm5.17-8.37c0.65 0 1.010.18 1.40.620.060.070.150.090.230.03l1.03-0.92c0.08-0.040.06-0.160.02-0.22-0.63-0.76-1.55-1.24-2.74-1.24-1.59 0-2.790.8-3.25 2.21-0.160.5-0.24 1.13-0.24 1.98 0 0.850.08 1.480.26 1.980.47 1.43 1.67 2.2 3.26 2.2 1.2 0 2.12-0.48 2.75-1.220.05-0.070.06-0.16-0.01-0.23l-1.04-0.91c-0.07-0.05-0.16-0.05-0.220.03-0.390.45-0.790.69-1.450.69-0.71 0-1.25-0.34-1.47-1.03-0.14-0.39-0.17-0.87-0.17-1.48 0-0.610.05-1.070.18-1.470.24-0.660.77-1.01 1.49-1.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCodecademy;
