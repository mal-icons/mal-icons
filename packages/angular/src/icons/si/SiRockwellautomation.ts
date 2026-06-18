import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rockwellautomation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRockwellautomation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.13 6.16-4.67-4.67a0.770.77 0 0 0-0.98-0.09l-8.98 6.05c1.70.11 2.730.8 2.73 2.37 0 1.37-0.74 2.23-1.99 2.37v0.02c0.580.110.970.38 1.250.740.10.130.170.280.210.43l0.71 2.15 3.05-7.65a0.710.71 0 0 1 0.66-0.45h2.68l3.57 8.93h-2.21c-0.45 0-0.87-0.28-1.06-0.71-0.11-0.33-0.23-0.65-0.34-0.98h-3.24l-0.63 1.69H9.05c-0.26 0-0.48-0.19-0.52-0.45l-0.8-2.34c-0.11-0.4-0.51-0.46-0.9-0.46h-0.78v3.26H3.28v-5.41l-1.65 1.11a0.560.56 0 0 0-0.240.46v3.45c0 0.220.130.420.330.51l15.54 6.5a0.770.77 0 0 0 0.85-0.16l5.01-4.99A2.98 2.98 0 0 0 24 15.73v-7.46a3 3 0 0 0-0.87-2.11ZM8.37 10.28c0-0.81-0.55-0.92-1.13-0.92H6.07v1.9h1.13c0.6 0 1.18-0.08 1.18-0.98zm6.87 2.42h1.81l-0.89-2.52ZM6.83 7.43 16.430.32c0.14-0.10.07-0.32-0.11-0.32H8.46a3.44 3.44 0 0 0-2.43 1.01L1.01 6.02A3.44 3.44 0 0 0 0 8.46v7.09c0 0.910.36 1.79 1.01 2.43l5.01 5.01A3.44 3.44 0 0 0 8.46 24h6.82c0.19 0 0.25-0.260.08-0.34l-13.55-6.39a1.61 1.61 0 0 1-0.93-1.46v-3.4c0-0.360.17-0.690.45-0.9l1.95-1.45V7.43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRockwellautomation;
