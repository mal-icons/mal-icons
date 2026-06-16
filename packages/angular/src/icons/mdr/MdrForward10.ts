import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-forward-10",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrForward10 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.92 13c-0.5 0-0.910.37-0.980.86a6.01 6.01 0 0 1-7.42 4.96c-2.25-0.54-3.91-2.27-4.39-4.53A6.01 6.01 0 0 1 12 7v2.79c0 0.450.540.670.850.35l3.79-3.79c0.2-0.20.2-0.51 0-0.71l-3.79-3.79a0.50.5 0 0 0-0.850.36V5c-4.94 0-8.84 4.48-7.84 9.60.6 3.11 2.9 5.5 5.99 6.19 4.83 1.08 9.15-2.2 9.77-6.670.09-0.59-0.4-1.12-1-1.12zm-8.02 3v-4.27h-0.09l-1.770.63v0.69l1.01-0.31V16zm3.42-4.22c-0.18-0.07-0.37-0.1-0.59-0.1s-0.410.03-0.590.1-0.330.18-0.450.33-0.230.34-0.290.57-0.10.5-0.10.82v0.74c0 0.320.040.60.110.82s0.170.420.30.570.280.260.460.330.370.10.590.10.41-0.030.59-0.10.33-0.180.45-0.330.22-0.340.29-0.570.1-0.50.1-0.82v-0.74c0-0.32-0.04-0.6-0.11-0.82s-0.17-0.42-0.3-0.57-0.29-0.26-0.46-0.33zm0.01 2.57c0 0.19-0.010.35-0.040.48s-0.060.24-0.110.32-0.110.14-0.190.17-0.160.05-0.250.05-0.18-0.02-0.25-0.05-0.14-0.09-0.19-0.17-0.09-0.19-0.12-0.32-0.04-0.29-0.04-0.48v-0.97c0-0.190.01-0.350.04-0.48s0.06-0.230.12-0.310.11-0.140.19-0.170.16-0.050.25-0.050.180.020.250.050.140.090.190.170.090.180.120.310.040.290.040.48v0.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrForward10;
