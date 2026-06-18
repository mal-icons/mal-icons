import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-rotate-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxRotateLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.76 8.76 5.34 7.34a8.05 8.05 0 0 0-1.84 2.86l1.870.7a6.05 6.05 0 0 1 1.38-2.15zM19 13a7.94 7.94 0 0 0-2.34-5.65A7.92 7.92 0 0 0 12 5.07V2L7 6l5 4V7.09a5.94 5.94 0 0 1 3.24 1.67A5.96 5.96 0 0 1 17 13v0c0 0.33-0.030.66-0.090.98-0.010.04-0.010.09-0.020.13a6.05 6.05 0 0 1-1.14 2.54c-0.160.21-0.330.41-0.520.6a5.95 5.95 0 0 1-0.730.61 5.91 5.91 0 0 1-2.28 1.01c-0.140.03-0.280.05-0.430.07-0.060.01-0.120.02-0.180.03a6.1 6.1 0 0 1-1.9-0.1L9.3 20.82a8.09 8.09 0 0 0 2.530.14c0.07-0.010.14-0.020.21-0.030.21-0.030.41-0.060.61-0.1l0.05-0.0100a7.88 7.88 0 0 0 2.14-0.79l000.03-0.02a7.91 7.91 0 0 0 1.01-0.67c0.27-0.210.53-0.430.78-0.670.25-0.250.47-0.510.68-0.780.02-0.030.05-0.050.07-0.08l-0.010a7.9 7.9 0 0 0 1.09-2l0.010c0.03-0.080.05-0.160.08-0.240.04-0.110.08-0.220.11-0.330.04-0.140.07-0.280.11-0.420.02-0.10.05-0.190.07-0.290.03-0.170.06-0.340.08-0.520.01-0.080.02-0.150.03-0.230.02-0.250.04-0.50.04-0.7500000-0.01zM6.2 16.6l-1.6 1.2a8.05 8.05 0 0 0 2.57 2.23l0.96-1.75a6.02 6.02 0 0 1-1.93-1.67zM5 13c0-0.140.01-0.290.02-0.43l-1.99-0.14a7.98 7.98 0 0 0 0.48 3.37l1.87-0.7A5.98 5.98 0 0 1 5 13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxRotateLeft;
