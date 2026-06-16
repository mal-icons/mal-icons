import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-phonelink-setup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPhonelinkSetup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.82 12.49c0.02-0.160.04-0.320.04-0.49 0-0.17-0.02-0.33-0.04-0.49l1.08-0.82c0.1-0.070.12-0.210.06-0.32l-1.03-1.73c-0.06-0.11-0.2-0.15-0.31-0.11l-1.280.5c-0.27-0.2-0.56-0.36-0.87-0.49l-0.2-1.33c0-0.12-0.11-0.21-0.24-0.21H5.98a0.260.26 0 0 0-0.260.21l-0.2 1.32c-0.310.12-0.60.3-0.870.49l-1.28-0.5c-0.12-0.05-0.25 0-0.310.11l-1.03 1.73c-0.060.12-0.030.250.070.33l1.080.82c-0.020.16-0.030.33-0.030.49 0 0.170.020.330.040.49l-1.090.83c-0.10.07-0.120.21-0.060.32l1.03 1.73c0.060.110.20.150.310.11l1.28-0.5c0.270.20.560.360.870.49l0.2 1.32c0.010.120.120.210.250.21h2.06c0.13 0 0.24-0.090.25-0.21l0.2-1.32c0.31-0.120.6-0.30.87-0.49l1.280.5c0.120.050.25 0 0.31-0.11l1.03-1.73c0.06-0.110.04-0.24-0.06-0.32l-1.1-0.83zM7 13.75c-0.99 0-1.8-0.78-1.8-1.75s0.81-1.75 1.8-1.75 1.80.78 1.8 1.75S8 13.75 7 13.75zM18 1.01 8 1c-1.1 0-2 0.9-2 2v3h2V5h10v14H8v-1H6v3c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-1.99-2-1.99z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPhonelinkSetup;
