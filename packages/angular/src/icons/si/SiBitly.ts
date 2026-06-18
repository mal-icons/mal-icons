import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bitly",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBitly {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.06 21.26c-1.340.02-2.33-0.41-2.39-1.58-0.02-0.44-0.02-0.910-1.190.14-1.72 1.33-2.95 2.53-3.19 1.48-0.29 2.460.38 2.46 2.31 0 1.3-0.36 3.62-2.59 3.66h-0.02zM11.92 0C5.32 0 0 5.3 0 12.22c0 3.59 1.92 7.06 4.62 9.150.520.4 1.140.37 1.50.020.3-0.280.27-0.98-0.28-1.47-2.16-1.89-3.65-4.76-3.65-7.63 0-5.15 4.58-9.49 9.74-9.49 6.28 0 9.64 5.1 9.64 9.43 0 2.65-1.29 5.84-3.63 7.870.02 0 0.49-0.940.49-2.78 0-3.13-1.98-4.84-4.28-4.84-1.66 0-2.670.6-3.34 1.15 0-1.270.05-3.650.05-3.65 0-1.57-0.54-2.83-2.47-2.86-1.11-0.01-1.930.49-2.44 1.65-0.180.44-0.120.920.25 1.130.30.180.810.05 1.05-0.280.17-0.210.25-0.250.4-0.240.240.030.260.410.260.660.010.190.19 2.90.09 9.87C7.98 21.8 9.49 24 13.1 24c1.56 0 2.76-0.43 4.49-1.42C20.24 21.08 24 17.76 24 12.13 23.95 5.05 18.27 0 11.93 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBitly;
