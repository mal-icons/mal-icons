import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-shazam",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiShazam {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 00 5.370 12c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12M9.87 16.74c-1.29 0-2.57-0.43-3.56-1.28-1.21-1.05-1.93-2.48-2.03-4.02-0.09-1.50.42-2.94 1.44-4.07C6.86 6.1 8.91 4.14 8.99 4.06c0.56-0.53 1.44-0.51 1.970.050.530.560.51 1.44-0.04 1.97-0.020.02-2.06 1.98-3.14 3.16-0.510.56-0.76 1.28-0.72 2.030.050.790.43 1.53 1.07 2.090.840.73 2.510.89 3.55-0.040.62-0.56 1.37-1.38 1.38-1.390.52-0.57 1.4-0.6 1.97-0.080.560.520.6 1.40.08 1.97-0.040.04-0.850.92-1.57 1.57-10.9-2.34 1.36-3.67 1.36m8.41-0.1c-1.14 1.26-3.19 3.23-3.28 3.31-0.270.26-0.610.39-0.960.39-0.37 0-0.73-0.14-1.01-0.43-0.53-0.56-0.51-1.440.04-1.970.02-0.02 2.06-1.98 3.14-3.170.51-0.560.76-1.280.72-2.03-0.05-0.79-0.43-1.53-1.07-2.08-0.84-0.73-2.51-0.89-3.550.04-0.620.56-1.37 1.38-1.38 1.38-0.520.57-1.40.6-1.970.08-0.56-0.52-0.6-1.4-0.08-1.970.03-0.040.85-0.93 1.57-1.57 1.98-1.78 5.22-1.81 7.23-0.08 1.21 1.05 1.94 2.48 2.03 4.030.09 1.5-0.42 2.95-1.43 4.07"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiShazam;
