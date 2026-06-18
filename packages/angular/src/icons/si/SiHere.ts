import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-here",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHere {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.29 1.01c-0.70.04-1.370.38-2.01 1.04-0.970.99-1.1 2.21-0.68 3.32l-1.09-1.31c-0.110.04-0.310.2-0.510.41-0.570.6-0.7 1.52-0.56 2.13l-0.73-0.63-1.45 1.48 2 2.03c-1.58-1.33-3.01-1.26-4.320.08-1.33 1.35-1.25 3.01-0.15 4.39l-0.19-0.19c-1.18-1.2-2.33-1.46-3.46-0.3-0.670.66-0.77 1.31-0.71 1.9l-2.79-2.83-1.62 1.65 5.37 5.48H0l3.31 3.37 3.28-3.34h3.13l-2.27-2.31c-0.8-0.8-1.04-1.35-0.55-1.850.36-0.380.77-0.37 1.280.15l2.74 2.8 1.65-1.68-2.05-2.08c1.62 1.37 3.39 1.03 4.74-0.350.71-0.7 1.09-1.35 1.28-1.8l-1.45-0.82a6.54 6.54 0 0 1-0.88 1.22c-0.80.81-1.540.81-2.050.39l2.94-2.99L17 12.25l1.65-1.68-1.78-1.81c-1.45-1.48-1.02-2.26-0.69-2.60.21-0.220.43-0.380.57-0.46a4.18 4.18 0 0 0 0.8 1.1c1.73 1.77 3.62 1.53 5.070.040.87-0.88 1.28-1.69 1.38-2.1l-1.42-0.8a5.9 5.9 0 0 1-1.02 1.49c-0.790.81-1.530.81-2.040.39l2.97-3.01-0.37-0.38C21.13 1.43 20.190.96 19.29 1.01zm-0.05 1.92c0.2700.560.110.840.35l-1.6 1.62c-0.45-0.53-0.46-1.14 0-1.620.23-0.230.49-0.350.76-0.35zm-7.36 7.49c0.2800.560.110.850.35l-1.61 1.63c-0.45-0.53-0.47-1.15 0-1.630.23-0.230.49-0.350.76-0.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHere;
