import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bisecthosting",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBisecthosting {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.08 5.02 13.020.3a2.72 2.72 0 0 0-2.49 0L1.92 4.79A2.06 2.06 0 0 0 0.81 6.62l0.01 10.76c0 0.770.43 1.48 1.11 1.83l8.59 4.48c0.380.20.810.3 1.250.3v0c0.43 0 0.86-0.11 1.24-0.31l9.08-4.74a2.05 2.05 0 0 0 1.11-1.83V6.86a2.06 2.06 0 0 0-1.11-1.83zm0.22 12.1c00.44-0.240.85-0.63 1.05l-9.09 4.74a1.81 1.81 0 0 1-1.66 0l-8.59-4.48a1.18 1.18 0 0 1-0.64-1.05L1.69 6.63c0-0.440.25-0.840.64-1.05l8.62-4.49a1.83 1.83 0 0 1 1.67 0l9.06 4.72c0.390.210.630.610.63 1.05v10.27zM4.67 9.2v1.09L9.86 9.44V7.95L4.67 9.2zm4.11-0.540.6-0.13v0.55l-0.60.11V8.66zm-3.450.76 2.55-0.56v0.49l-2.550.46V9.42zm4.54 6.74v-1.49l-5.19-0.85v1.09l5.2 1.25zm-1.99-0.9-2.55-0.56v-0.39l2.550.46v0.5zm1.510.33-0.6-0.13v-0.53l0.60.11v0.55zm11.58-8.83-2.33-1.21-1.850.69V4.58L13.69 2.97a4.13 4.13 0 0 0-3.83 0l-6.83 3.56a0.30.3 0 0 0-0.160.26l0.01 10.4c0 0.110.060.210.160.26l6.81 3.55c1.20.63 2.630.63 3.83 0l3.1-1.61v-1.66l1.850.69 2.35-1.23a0.30.3 0 0 0 0.16-0.26l-0.01-9.91a0.290.29 0 0 0-0.16-0.26zM4.4 10.87V8.75l5.54-1.49a0.230.23 0 0 1 0.290.22V9.83c0 0.2-0.150.38-0.360.4l-5.470.64v0zm5.48 3.01a0.40.4 0 0 1 0.360.4v2.36a0.230.23 0 0 1-0.290.22l-5.54-1.49v-2.12l5.470.64zm3.14 6.96s0.43-0.610.48-1.74V14.62s0.04-1.68-1.33-2.6c1.38-0.92 1.34-2.6 1.34-2.6V5.1c0-1.27-0.49-1.97-0.49-1.97l3.31 1.73v5.06c0 0.080.060.140.140.15l2.140.15a0.150.15 0 0 0 0.16-0.15V6.12l1.97 1.02v9.68L18.75 17.85v-4.25a0.150.15 0 0 0-0.16-0.15l-2.140.16a0.150.15 0 0 0-0.140.15v5.37l-3.3 1.72v0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBisecthosting;
