import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-copyright",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCopyright {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.08 10.86c0.05-0.330.16-0.620.3-0.87s0.34-0.460.59-0.62c0.24-0.150.54-0.220.91-0.230.230.010.440.050.630.130.20.090.380.210.520.36s0.250.330.340.530.130.420.140.64h1.79c-0.02-0.47-0.11-0.9-0.28-1.29s-0.4-0.73-0.7-1.01-0.66-0.5-1.08-0.66-0.88-0.23-1.39-0.23c-0.65 0-1.220.11-1.70.34s-0.880.53-1.20.92-0.560.84-0.71 1.36S8 11.29 8 11.87v0.27c0 0.580.08 1.120.23 1.64s0.390.970.71 1.350.720.69 1.20.91c0.480.22 1.050.34 1.70.340.47 0 0.91-0.08 1.32-0.23s0.77-0.36 1.08-0.630.56-0.580.74-0.940.29-0.740.3-1.15h-1.79c-0.010.21-0.060.4-0.150.58s-0.210.33-0.360.46-0.320.23-0.520.3c-0.190.07-0.390.09-0.60.1-0.36-0.01-0.66-0.08-0.89-0.23-0.25-0.16-0.45-0.37-0.59-0.62s-0.25-0.55-0.3-0.88-0.08-0.67-0.08-1v-0.27c0-0.350.03-0.680.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCopyright;
