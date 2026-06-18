import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-d",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiD {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.64 3.88a1.36 1.25 0 0 0-1.36 1.25 1.36 1.25 0 0 0 1.36 1.25A1.36 1.25 0 0 0 24 5.13a1.36 1.25 0 0 0-1.36-1.25zm-160.42-6.030.01c-0.03 0-0.050-0.08 0-0.30.04-0.530.27-0.530.56l0.02 14.57c0 0.220.060.680.680.68l5.58-0.02c1.60 2.66-0.03 3.3-0.11h0.02a11.43 11.43 0 0 0 1.96-0.47c1.22-0.38 2.3-0.94 3.23-1.7a7.85 7.85 0 0 0 2.11-2.56 6.72 6.72 0 0 0 0.65-1.99 4.24 3.89 0 0 0 0.260.03 4.24 3.89 0 0 0 4.24-3.89 4.24 3.89 0 0 0-4.24-3.89 4.24 3.89 0 0 0-2.9 1.08 8.84 8.84 0 0 0-2.25-1.35c-1.54-0.65-3.54-0.95-6.02-0.94zm-0.26 3c1.220 2.080.03 2.570.1a7.32 7.32 0 0 1 1.620.44c0.570.22 1.070.48 1.50.81 1.180.92 1.73 2 1.73 3.430 1.47-0.53 2.61-1.68 3.57a5.58 5.58 0 0 1-1.180.74c-0.410.19-0.940.36-1.610.5-0.640.13-1.60.2-2.860.2l-2.670-0.01-9.79 2.60z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiD;
