import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-progate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiProgate {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.06 24a17.14 17.14 0 1-3.46-0.7c-1.24-0.36-2.9-1-2.91-2.32 0-0.950.54-1.75 1.68-2.48a15.83 15.83 0 11.6-0.84 39.6 39.6 0 12.2-0.93V4.98l-4.41-0.48v12.65a0.850.85 0 1-0.890.850.850.85 0 1-0.9-0.85V3.5a0.910.91 0 1.9-0.90.80.8 0 1.10.01l6.20.67a0.90.9 0 1.80.9v11.83a61.19 61.19 0 2.4-1.03c2.27-1.04 3.8-2.09 4.67-3.24 1.06-1.37 1.22-3.07 1.17-4.26a6.26 6.26 0 0-1.25-3.51 5.5 5.5 0 0-2.1-1.72 6.21 6.21 0 0-1.66-0.49c-0.6-0.08-0.9-0.51-0.86-0.940.03-0.430.38-0.750.89-0.80.86-0.07 1.50.15 2.380.54a7.76 7.76 0 12.86 2.32 8.17 8.17 0 11.6 4.52 8.97 8.97 0 1-0.48 3.48 7.36 7.36 0 1-1.09 1.97c-1.58 2.07-4.39 3.34-5.31 3.76-0.870.4-2.8 1.2-3.18 1.35V23.1a0.910.91 0 1-0.310.680.920.92 0 1-0.570.22zm-0.9-5.32c-0.550.2-1.40.51-1.720.66-0.320.15-1.220.56-1.610.91-0.10.09-0.420.39-0.340.630.080.240.450.37 1.90.770.520.14 1.130.27 1.770.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiProgate;
