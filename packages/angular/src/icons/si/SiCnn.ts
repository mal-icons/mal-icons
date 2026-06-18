import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cnn",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCnn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 15.51c0 2.06-2.67 3.05-4.080.66-0.1-0.17-2.33-4-2.33-4v3.35c0 2.06-2.67 3.05-4.080.66-0.1-0.17-2.33-4-2.33-4v3.15c0 1.43-0.85 2.21-2.18 2.21H5.53a5.53 5.53 0 10-11.06h1.79v1.33H5.53a4.2 4.2 0 100 8.4h3.45a0.90.9 0 0.88-0.88V8.52a0.270.27 0 1.19-0.27c0.14-0.040.290.050.40.23l2.15 3.71c1.25 2.16 2.07 3.57 2.08 3.590.280.470.70.5610.48a0.80.8 0 0.58-0.79v-6.94a0.270.27 0 1.19-0.27c0.14-0.040.290.050.390.23l1.99 3.44 2.24 3.86c0.220.370.520.50.790.5a0.770.77 0 0.21-0.030.80.8 0 0.59-0.79V6.47H24zM8 13.97V8.49c0-2.06 2.67-3.05 4.08-0.660.10.17 2.33 4 2.33 4V8.49c0-2.06 2.67-3.05 4.08-0.660.10.17 2.33 4 2.33 4V6.47H22.14v9a0.270.27 0 1-0.190.27c-0.140.04-0.29-0.05-0.4-0.23a1360.43 1360.43 0 1-2.24-3.86l-1.99-3.43c-0.28-0.47-0.7-0.56-0.99-0.48a0.80.8 0 0-0.580.79v6.95a0.270.27 0 1-0.190.27c-0.140.04-0.29-0.05-0.4-0.23-0.02-0.03-1.07-1.84-2.08-3.59a6211.8 6211.8 0 0-2.15-3.71c-0.28-0.48-0.7-0.56-1-0.48a0.80.8 0 0-0.580.79v6.8a0.370.37 0 1-0.350.35h-3.45a3.67 3.67 0 10-7.34H7.32v1.33H5.54a2.34 2.34 0 100 4.69H7.64a0.360.36 0 0.37-0.37Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCnn;
