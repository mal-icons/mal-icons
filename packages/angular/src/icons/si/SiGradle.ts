import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gradle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGradle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.7 4.3a3.81 3.81 0 0 0-5.29-0.090.370.37 0 0 0 0 0.53l0.460.47a0.360.36 0 0 0 0.470.03 2.18 2.18 0 0 1 2.86 3.29c-3.02 3.02-7.06-5.45-16.21-1.08a1.24 1.24 0 0 0-0.53 1.75l1.57 2.71a1.24 1.24 0 0 0 1.680.46l0.04-0.02-0.030.020.69-0.38a16.08 16.08 0 0 0 2.19-1.630.380.38 0 0 1 0.5-0.020.360.36 0 0 1 0.020.53 16.43 16.43 0 0 1-2.32 1.74H8.77l-0.70.39a1.96 1.96 0 0 1-0.960.25 1.99 1.99 0 0 1-1.73-0.99L3.9 9.7C1.06 11.72-0.69 15.60.26 20.52a0.360.36 0 0 0 0.350.3h1.68a0.360.36 0 0 0 0.37-0.33 2.48 2.48 0 0 1 4.92 0 0.360.36 0 0 0 0.360.32h1.64a0.360.36 0 0 0 0.36-0.32 2.48 2.48 0 0 1 4.91 0 0.360.36 0 0 0 0.360.32h1.63a0.360.36 0 0 0 0.36-0.36c0.04-2.290.66-4.93 2.42-6.25 6.11-4.57 4.5-8.49 3.09-9.9zm-6.23 6.9l-1.16-0.58a0.730.73 0 1 1 1.170.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGradle;
