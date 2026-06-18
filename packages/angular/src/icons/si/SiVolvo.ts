import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-volvo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVolvo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.87 12.58h0.49l0-1.45h-0.49v-0.32h1.94v0.32h-0.48v1.45h0.45c0.42 0 0.69-0.270.69-0.65h0.32v0.97h-2.91v-0.32zm4.310.33h1.13l0.96-1.78h0.48v-0.32h-1.45v0.32h0.42l-0.7 1.3-0.71-1.29h0.51l0-0.32h-2.1v0.32h0.48l0.98 1.78zM5.07 10.81H2.97v0.32h0.48l0.98 1.78h1.13l0.96-1.78h0.48v-0.32h-1.45v0.32h0.42l-0.7 1.3-0.71-1.29h0.51v-0.32zm3.71-0.04c0.98 0 1.50.49 1.5 1.1 0 0.62-0.49 1.11-1.49 1.11-1 0-1.5-0.49-1.5-1.11 0-0.610.52-1.1 1.49-1.1zm0.020.33c-0.330-0.530.35-0.530.75-0.010.390.150.780.510.790.370.010.52-0.390.53-0.770.01-0.4-0.17-0.76-0.5-0.77zm10.74-0.33c0.97 0 1.50.49 1.5 1.1 0 0.62-0.49 1.11-1.49 1.11-1 0-1.5-0.49-1.5-1.11 0-0.610.52-1.1 1.49-1.1zm-0.52 1.08c-0.010.390.150.780.510.790.370.010.52-0.390.53-0.770.01-0.4-0.17-0.76-0.5-0.77-0.33-0.01-0.530.35-0.530.75zm2.86-6.67L20.66 6.4A10.26 10.26 0 0 1 22.31 12c0 5.69-4.61 10.31-10.31 10.31S1.69 17.69 1.69 12 6.31 1.69 12 1.69c2.07 0 40.61 5.61 1.66l1.22-1.22A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12c0-2.53-0.78-4.88-2.12-6.82zM18.040.47v0.34c0.730.39 1.410.86 2.05 1.38l-1.71 1.71a10.29 10.29 0 0 1 1.74 1.73l1.71-1.71c0.520.640.99 1.32 1.38 2.04h0.33V0.47h-5.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVolvo;
