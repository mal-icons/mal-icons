import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-imagetoolbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiImagetoolbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 7.15v1.83q0 0.470.320.79t0.790.32h1.83q0.22 0 0.43-0.080.21-0.080.38-0.25l5.78-5.78q0.25-0.250.36-0.570.11-0.320.11-0.62 0-0.3-0.12-0.61a2 2 0 0 0-0.35-0.56L22.50.59a1.67 1.67 0 0 0-1.19-0.5q-0.3 0-0.610.11a1.5 1.5 0 0 0-0.560.36L14.33 6.35a1.1 1.1 0 0 0-0.250.38 1.2 1.2 0 0 0-0.080.43ZM16.72 8.43h-1.06V7.37l3.39-3.36 1.03 1.03zm3 4.63c0-1.380-2.49-0.03-3.42l1.87-1.87c0.14 1.330.14 3.040.14 5.3 0 4.57 0 6.86-1.18 8.44a6 6 0 0 1-1.22 1.22c-1.59 1.19-3.87 1.19-8.44 1.19s-6.86 0-8.44-1.18A6 6 0 0 1 1.18 21.5C0 19.91 0 17.63 0 13.06s0-6.85 1.18-8.44a6 6 0 0 1 1.22-1.22C4 2.21 6.28 2.21 10.85 2.21c2.48 0 4.28 0 5.670.19l-1.84 1.84c-1.01-0.04-2.25-0.04-3.83-0.04-2.33 0-3.920-5.120.14-1.170.13-1.740.36-2.140.65a4 4 0 0 0-0.810.82c-0.290.4-0.530.97-0.65 2.13-0.13 1.21-0.14 2.79-0.14 5.12s0 3.920.14 5.12q0.040.390.10.7l0.02-0.01c1.8-1.31 3.66-2.67 5.25-1.75l1.360.84c1.330.82 2.86-0.58 4.52-2.1 1.12-1.03 2.3-2.11 3.52-2.6 1.11-0.45 1.86-0.06 2.820.74v-0.93ZM5.17 9.53c0 1.3 1.03 2.34 2.34 2.34S9.84 10.78 9.84 9.53c0-1.3-1.03-2.33-2.34-2.33S5.17 8.23 5.17 9.53"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiImagetoolbox;
