import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-globe-central-south-asia-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsGlobeCentralSouthAsiaFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1a7 7 0 0 0-3.110.730.480.48 0 0 0 0.140.290.490.49 0 0 1-0.130.78l-0.290.14a0.70.7 0 0 0-0.190.14l-0.480.48a1 1 0 0 1-1.020.24l-0.02-0.01a1 1 0 0 0-0.46-0.04A6.97 6.97 0 0 0 1 8a6.96 6.96 0 0 0 0.88 3.4l0.86-0.21c0.44-0.110.76-0.510.76-0.97v-0.18a1 1 0 0 1 0.45-0.83l0.04-0.03a1 1 0 0 0 0.15-1.54L3.12 6.62a0.420.42 0 0 1 0.54-0.62l1.090.82a0.50.5 0 0 0 0.520.05A0.50.5 0 0 1 6 7.31v0.46a0.80.8 0 0 0 0.130.43l0.8 1.19a1 1 0 0 1 0.120.24l0.73 2.19a1 1 0 0 0 0.950.68h0.06a1 1 0 0 0 0.95-0.68l0.73-2.19q0.04-0.130.12-0.24l0.79-1.19A0.450.45 0 0 1 11.74 8c0.16 0 0.310.080.390.220.560.88 1.63 2.28 2.37 2.28l0.040A7 7 0 0 0 8 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsGlobeCentralSouthAsiaFill;
