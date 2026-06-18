import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-wordpress",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlWordpress {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.89 7.79a8.97 8.97 0 0 1 1.1 4.31 8.99 8.99 0 0 1-4.47 7.77l2.75-7.94c0.51-1.280.68-2.310.68-3.22a7.17 7.17 0 0 0-0.06-0.93m-6.650.09a14.14 14.14 0 0 0 1.03-0.09c0.49-0.060.43-0.77-0.06-0.75 0 0-1.460.11-2.40.11-0.89 0-2.37-0.12-2.37-0.12-0.49-0.02-0.550.71-0.060.74 0 0 0.450.050.940.08l1.4 3.84-1.97 5.9-3.27-9.72a17.01 17.01 0 0 0 1.03-0.08c0.49-0.060.43-0.77-0.05-0.75 0 0-1.450.12-2.390.12-0.17 0-0.36-0.01-0.57-0.01C6.09 4.73 8.86 3.11 12 3.11c2.34 0 4.470.89 6.07 2.36-0.040-0.08-0.01-0.12-0.01-0.88 0-1.510.77-1.51 1.6 0 0.740.43 1.370.88 2.110.340.60.74 1.370.74 2.48 0 0.76-0.29 1.66-0.68 2.9l-0.9 2.99-3.25-9.6800.01zM12 21.09a8.98 8.98 0 0 1-2.54-0.36l2.7-7.84 2.76 7.57c0.020.040.040.090.070.12a9.02 9.02 0 0 1-2.980.51m-8.99-8.99a8.94 8.94 0 0 1 0.78-3.66l4.29 11.75a8.99 8.99 0 0 1-5.07-8.09m8.99-10c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlWordpress;
