import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-settings-applications",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSettingsApplications {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zm7-7H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1.75 9c0 0.23-0.020.46-0.050.68l1.48 1.16c0.130.110.170.30.080.45l-1.4 2.42c-0.090.15-0.270.21-0.430.15l-1.74-0.7c-0.360.28-0.760.51-1.180.69l-0.26 1.85c-0.030.17-0.180.3-0.350.3h-2.8c-0.17 0-0.32-0.13-0.35-0.29l-0.26-1.85c-0.43-0.18-0.82-0.41-1.18-0.69l-1.740.7c-0.160.06-0.34 0-0.43-0.15l-1.4-2.42a0.350.35 0 0 1 0.08-0.45l1.48-1.16c-0.03-0.23-0.05-0.46-0.05-0.69 0-0.230.02-0.460.05-0.68l-1.48-1.16a0.350.35 0 0 1-0.08-0.45l1.4-2.42c0.09-0.150.27-0.210.43-0.15l1.740.7c0.36-0.280.76-0.51 1.18-0.69l0.26-1.85c0.03-0.170.18-0.30.35-0.3h2.8c0.17 0 0.320.130.350.29l0.26 1.85c0.430.180.820.41 1.180.69l1.74-0.7c0.16-0.060.34 0 0.430.15l1.4 2.42c0.090.150.050.34-0.080.45l-1.48 1.16c0.030.230.050.460.050.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSettingsApplications;
