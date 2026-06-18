import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rewe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRewe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.6 12.45h0.03l0.58-3.17c0.07-0.360.21-0.490.63-0.49h0.58c0.31 0 0.480.120.480.4 0 0.06-0.010.14-0.030.22l-1.28 5.29c-0.080.36-0.190.51-0.630.51h-0.7c-0.4 0-0.51-0.14-0.6-0.49l-0.8-3.45h-0.01l-0.81 3.46c-0.080.36-0.190.49-0.590.49h-0.7c-0.45 0-0.56-0.14-0.64-0.5l-1.27-5.3c-0.02-0.08-0.04-0.15-0.04-0.22 0-0.280.18-0.40.49-0.4h0.69c0.42 0 0.570.130.640.49l0.57 3.17h0.02l0.74-3.17c0.09-0.360.23-0.490.63-0.49h0.65c0.39 0 0.540.130.630.49l0.74 3.17zM0.5 15.21c-0.35 0-0.5-0.14-0.5-0.5V9.3c0-0.350.15-0.50.5-0.5h1.84c1.98 0 2.740.75 2.74 2.02 0 0.78-0.42 1.43-1.35 1.75l1.47 2.03c0.090.120.130.220.130.31 0 0.21-0.240.31-0.510.31H3.72c-0.32 0-0.44-0.13-0.67-0.49l-1.21-1.93h-0.02v1.93c0 0.35-0.150.5-0.510.5H0.5zm19.48 0c-0.35 0-0.48-0.13-0.48-0.48V9.29c0-0.360.14-0.490.49-0.49h3.25c0.36 0 0.490.130.490.49v0.46c0 0.35-0.130.48-0.490.48h-1.87v1.06h1.58c0.36 0 0.480.130.480.49v0.43c0 0.35-0.130.48-0.480.48H21.36v1.1h2.14c0.36 0 0.50.130.50.49v0.46c0 0.35-0.130.48-0.50.48h-3.53zm-13.41 0c-0.35 0-0.5-0.14-0.5-0.5V9.3c0-0.350.15-0.50.5-0.5h3.21c0.35 0 0.50.150.50.5v0.43c0 0.35-0.150.5-0.50.5H7.93v1.06H9.49c0.36 0 0.510.150.510.51v0.39c0 0.35-0.150.5-0.510.5H7.93v1.09h2.13c0.36 0 0.510.150.510.51v0.42c0 0.35-0.150.5-0.510.5H6.57zM2.35 11.68c0.56 0 0.79-0.230.79-0.74s-0.24-0.74-0.79-0.74h-0.53v1.49h0.53Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRewe;
