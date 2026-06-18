import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-lubuntu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLubuntu {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0m1.29 4.72q0.32-0.030.630a3.17 3.17 0 0 1 2.41 1.64l5.670.78h-6.46a2.58 2.58 0 0 0-1.66-0.95 2.57 2.57 0 0 0-1.370.19c-0.430.19-0.80.5-1.070.88-0.270.39-0.420.84-0.45 1.31-0.030.470.080.940.3 1.35a3.13 3.13 0 0 1-0.79-1.68 3.13 3.13 0 0 1 0.31-1.83 3.14 3.14 0 0 1 1.3-1.33 3.1 3.1 0 0 1 1.2-0.36m-9.88 1.09 8.67 6.23-7.15-4.01a3.6 3.6 0 0 0-0.07 2.02 3.57 3.57 0 0 0 2 2.34l4.75 1.33-6-0.98c0.060.580.28 1.130.62 1.6a3.33 3.33 0 0 0 2.65 1.33 3.95 3.95 0 0 1-3.06-0.45 3.9 3.9 0 0 1-1.43-1.56 3.9 3.9 0 0 1-0.4-2.08l1.320.37a4.7 4.7 0 0 1-1.25-0.99 4.7 4.7 0 0 1-1.11-2.48 4.67 4.67 0 0 1 0.47-2.68m11.67 3.13q-0.010.14-0.010.28c0.01 1.140.54 2.21 1.06 3.230.52 1.02 1.06 2.08 1.09 3.220.020.95-0.32 1.9-0.9 2.65-0.580.76-1.38 1.33-2.25 1.7a6.5 6.5 0 0 1-3.910.34l-1 2.37v-3.33a6.23 6.23 0 0 0 3.67-0.31c0.7-0.28 1.35-0.71 1.86-1.26s0.88-1.250.99-2c0.15-1-0.15-2.01-0.45-2.97s-0.59-1.98-0.44-2.97a3.3 3.3 0 0 1 0.29-0.93"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLubuntu;
