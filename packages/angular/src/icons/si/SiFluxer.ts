import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fluxer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFluxer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c6.63 0 12 5.37 12 12s-5.37 12-12 12S0 18.63 0 12 5.37 0 12 0M8.79 12.47q-1.09 0-2.080.49-0.970.49-1.59 1.58-0.390.71-0.52 1.73c-0.080.630.45 1.14 1.08 1.140.65 0 1.13-0.54 1.28-1.17q0.13-0.530.43-0.840.57-0.6 1.44-0.60.58 0 1.060.290.480.28 1.250.95 1.18 1.04 2.08 1.510.90.46 1.990.46 1.09 0 2.08-0.490.99-0.49 1.6-1.570.4-0.710.52-1.73c0.07-0.62-0.45-1.13-1.08-1.13-0.65 0-1.130.55-1.31 1.18a2.1 2.1 0 0 1-0.380.77q-0.530.67-1.470.67-0.58 0-1.05-0.28-0.46-0.29-1.26-0.96-1.19-1-2.09-1.48a4 4 0 0 0-1.98-0.49M8.79 6q-1.09 0-2.080.49-0.970.49-1.59 1.58-0.390.71-0.52 1.73c-0.080.630.45 1.14 1.08 1.140.65 0 1.13-0.54 1.28-1.17q0.13-0.530.43-0.840.57-0.6 1.44-0.60.58 0 1.060.290.480.28 1.250.95 1.18 1.04 2.08 1.510.90.46 1.990.46t2.08-0.49q0.99-0.49 1.6-1.570.4-0.720.52-1.73c0.07-0.62-0.45-1.13-1.08-1.13-0.65 0-1.130.55-1.31 1.18a2.1 2.1 0 0 1-0.380.78q-0.530.66-1.470.66-0.58 0-1.05-0.28-0.46-0.29-1.26-0.96-1.19-1-2.09-1.48A4 4 0 0 0 8.79 6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFluxer;
