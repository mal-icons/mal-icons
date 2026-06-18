import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-yandexcloud",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiYandexcloud {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zM7.16 20.62C4.15 18.93 2.12 15.7 2.12 12c0-5.46 4.42-9.88 9.88-9.88 1.43 0 2.50.54 3.03 1.190.530.650.68 1.720.5 3.25l-3.210.63c-2.90.53-4.51 2.15-5.06 5.07-0.070.41-0.150.81-0.23 1.2-0.030.16-0.060.31-0.090.46-0.070.4-0.140.77-0.21 1.12-0.090.51-0.180.96-0.25 1.34-0.32 1.88-0.06 3.280.67 4.24zm7.99-11.85c-0.090.43-0.170.87-0.25 1.3-0.080.43-0.160.87-0.25 1.3-0.4 2.05-1.36 3-3.42 3.39l-2.390.47c0.06-0.30.12-0.610.18-0.930.02-0.120.04-0.240.07-0.360.08-0.420.16-0.850.25-1.310.4-2.05 1.34-3 3.4-3.39l2.41-0.47zM12 21.88c-1.43 0-2.5-0.54-3.03-1.19s-0.68-1.71-0.5-3.25l3.18-0.63c2.91-0.53 4.51-2.15 5.08-5.050.07-0.410.15-0.810.23-1.20.03-0.160.06-0.310.09-0.460.09-0.470.17-0.920.25-1.330.08-0.430.15-0.820.22-1.160.33-1.880.06-3.27-0.67-4.24C19.85 5.07 21.88 8.3 21.88 12c0 5.46-4.42 9.88-9.88 9.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiYandexcloud;
