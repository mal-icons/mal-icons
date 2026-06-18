import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zaim",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZaim {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.750.45C6.130.45 4.850.62 4 1.05c-0.510.26-1.190.77-1.45 1.78-0.26 1.020.17 1.780.51 2.12a8.26 8.26 0 0 0 2.21 1.61c-1.870.43-3.40.93-4.25 1.53C0.51 8.43 0 9.03 0 10.13v9.43c0 1.10.51 1.70.94 2.04 1.53 1.1 5.45 1.95 9.96 1.95 4.51 0 8.43-0.76 9.96-1.950.51-0.34 1.02-0.93 1.02-2.04v-9.43c0-0.17 0-0.42-0.08-0.590.26-0.080.51-0.170.68-0.250.51-0.25 1.19-0.76 1.45-1.780.26-1.02-0.17-1.78-0.51-2.21-1.19-1.44-4.85-3.14-9.28-4.08C11.830.71 9.620.45 7.750.45Zm0.46 1.51c1.570.02 3.550.26 5.670.7 4.85 1.1 8.51 2.89 8.26 4.08-0.26 1.19-4.43 1.27-9.190.26-4.85-1.1-8.51-2.89-8.26-4.080.14-0.67 1.5-0.99 3.52-0.96Zm-0.29 5.8c1.360.43 2.90.93 4.51 1.27 2.810.68 5.450.85 7.580.77 0 1.19-4 2.21-8.94 2.21-4.94 0-8.94-1.02-8.94-2.21 0-0.93 2.38-1.7 5.79-2.04zm-4.34 5.52c1.960.51 4.510.85 7.410.85 2.89 0 5.45-0.34 7.41-0.850.940.43 1.530.85 1.53 1.27 0 1.19-4 2.21-8.94 2.21-4.94 0-8.94-1.02-8.94-2.21 0-0.510.6-0.93 1.53-1.27zm0 4.75c1.960.51 4.510.85 7.410.85 2.89 0 5.45-0.34 7.41-0.850.940.43 1.530.85 1.53 1.27 0 1.19-4 2.21-8.94 2.21-4.94 0-8.94-1.02-8.94-2.21 0-0.510.6-0.93 1.53-1.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZaim;
