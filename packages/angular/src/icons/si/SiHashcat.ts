import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hashcat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHashcat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.98 0c-0.770-1.530.14-2.010.4C9.070.88 7.940.98 6.510.66L5.450.45l0.820.77c0.980.92 1.66 2.43 1.66 3.67 0 1.03 1.16 2.51 2.38 3.010.790.320.820.40.66 1.56-0.79 5.89-1.5 8.42-2.77 9.87-1.08 1.27-1.32 1.88-1.32 3.33V24h10.3v-1.35c0-1.42-0.24-2.03-1.27-3.27-1.29-1.56-2.22-4.75-2.64-9.16-0.21-2.01-0.18-2.090.4-2.220.92-0.24 2.4-2.06 2.59-3.190.11-0.550.24-1.350.32-1.740.05-0.420.55-1.16 1.06-1.66l0.92-0.92-1.030.19c-1.370.29-2.590.19-3.51-0.29-0.49-0.25-1.26-0.38-2.03-0.37M9.04 5.26h0c0.24 0 2.06 1.08 2.06 1.21 0 0.32-0.870.03-1.5-0.55-0.39-0.34-0.65-0.65-0.56-0.66m5.980.06c0.10-0.10.2-0.560.6-0.40.37-0.920.66-1.160.66-0.53 0-0.37-0.160.77-0.790.56-0.310.87-0.470.96-0.47"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHashcat;
