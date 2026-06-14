import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-scissors",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiScissors {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.63 5.52c-1-1.52-2.91-1.67-4.4-0.82l-0.190.11-0.080c-1.04 0-2.010.51-2.6 1.37l-0.030.05c-0.430.65-0.72 1.24-1 1.81-0.250.52-0.5 1.01-0.82 1.48-0.32-0.47-0.57-0.97-0.83-1.49-0.28-0.57-0.57-1.16-1-1.81l-0.03-0.04c-0.59-0.86-1.56-1.37-2.6-1.37-1.75 0-3.17 1.42-3.17 3.17 0 1.75 1.42 3.17 3.17 3.170.78 0 1.52-0.29 2.09-0.79l0.65 1.2c-1.62 1.88-2.98 4.05-3.02 4.12-1.24 1.70.71 4.420.79 4.530.090.130.250.210.410.210.2-0.010.36-0.110.44-0.26l3.11-5.72 3.11 5.72c0.080.150.240.250.410.260.170.020.34-0.070.44-0.210.08-0.11 2.02-2.830.81-4.5l-0.32-0.52c-1.08-1.74-1.19-1.92-2.71-3.63l0.65-1.19c0.570.5 1.310.79 2.090.79 1.75 0 3.17-1.42 3.17-3.17 0-0.63-0.19-1.25-0.55-1.770.47-0.271-0.12 1.460.10.470.190.9-0.380.58-0.77zm-13.62 3.49c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm4.5 3.4c-0.28 0-0.5-0.22-0.5-0.5 0-0.280.22-0.50.5-0.5s0.50.220.50.5c0 0.28-0.220.5-0.50.5zm4.5-3.39c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiScissors;
