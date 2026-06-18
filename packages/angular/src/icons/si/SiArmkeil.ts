import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-armkeil",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiArmkeil {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.03 10.06h0.9v3.86h-0.9v-0.4c-0.290.34-0.710.53-1.160.52-1.19 0-1.87-0.99-1.87-2.06 0-1.260.86-2.03 1.88-2.030.45-0.010.870.2 1.150.55v-0.45zm-2.11 1.95c0 0.670.42 1.23 1.07 1.230.57 0 1.09-0.41 1.09-1.22 0-0.84-0.52-1.25-1.09-1.25-0.65 0-1.070.55-1.07 1.24zm4.08-1.94h0.9v0.35c0.11-0.130.23-0.230.38-0.320.17-0.090.36-0.140.55-0.130.2500.490.060.710.19l-0.370.82a0.810.81 0 0 0-0.46-0.14c-0.19 0-0.380.03-0.560.21-0.250.27-0.250.63-0.250.89v2h-0.9V10.06zm3.11 0h0.9v0.36a1.19 1.19 0 0 1 0.95-0.46c0.41-0.010.790.21 1 0.570.32-0.460.81-0.57 1.15-0.570.47 0 0.880.22 1.10.610.070.130.20.410.20.97v2.39h-0.9v-2.13c0-0.43-0.05-0.61-0.08-0.69a0.510.51 0 0 0-0.51-0.340.660.66 0 0 0-0.530.28c-0.160.22-0.170.55-0.170.88v1.99h-0.9v-2.13c0-0.43-0.05-0.61-0.08-0.69a0.510.51 0 0 0-0.51-0.340.660.66 0 0 0-0.530.28c-0.160.22-0.170.55-0.170.88v1.99h-0.9V10.06zm7.32 1.66 1.65-1.66h0.58l-1.81 1.8 1.87 2.06h-0.59l-1.58-1.77-0.110.11v1.66H15V10.06h0.43v1.66zm4.87-1.25h-1.57v1.15h1.53v0.41h-1.53v1.5h1.58v0.41h-2V10.06h2v0.41zm1.22-0.4v3.86h-0.43V10.06h0.43zm1.43 0v3.46H24v0.41h-1.49V10.06h0.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiArmkeil;
