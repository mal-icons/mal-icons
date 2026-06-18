import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-geocaching",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGeocaching {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 11.24h1.92c0.15-1.740.84-3.82 2.52-5.5C2.81 4.53 2.48 3.14 2.48 2.36h0.65c0.070.680.36 1.66 2.25 2.75C7.17 4.07 7.53 3.04 7.63 2.36h0.65c0 0.72-0.32 2.08-1.95 3.38 1.370.89 2.51 2.19 2.93 4.24H7.58c-0.29-1.46-1.04-2.62-2.19-3.5-1.17 1.14-1.77 3.02-1.81 4.77h6.57V1.1H0v10.14zM5.38 2.63c0.47 0 0.850.380.850.84 0 0.47-0.380.84-0.850.84a0.850.85 0 0 1-0.85-0.840.850.85 0 0 1 0.85-0.84zM3.57 12.78h6.57v6.57a7.34 7.34 0 0 1-3.77-1.53L5.2 18.99a8.98 8.98 0 0 0 4.95 2.01v1.92H0V12.78h1.92a8.98 8.98 0 0 0 2.03 4.97l1.17-1.17a7.33 7.33 0 0 1-1.55-3.8zm8.11-11.68h10.14V11.24h-1.92a8.98 8.98 0 0 0-2.01-4.95l-1.17 1.17a7.34 7.34 0 0 1 1.53 3.78h-6.57V4.67a7.35 7.35 0 0 1 3.8 1.55l1.17-1.17a8.99 8.99 0 0 0-4.97-2.03V1.1zm0 11.68h10.14V22.92h-5.99l-1.17-4.74c0.47-0.570.97-0.84 2.14-1.02 2.18-0.34 2.58-2.23 2.58-2.23-1.020.25-1.840-2.8-0.23-0.95-0.23-1.86-0.21-2.730.09-0.660.23-0.820.45-0.820.45l1.91 7.68h-3.26V12.78zm11.4-11.7a0.890.89 0 0 0-0.910.92c0 0.520.390.910.910.91A0.890.89 0 0 0 24 2a0.90.9 0 0 0-0.92-0.92zm0 1.68a0.740.74 0 0 1-0.75-0.76c0-0.440.32-0.760.75-0.760.44 0 0.760.330.760.76a0.740.74 0 0 1-0.760.76zm0.38-0.91c0-0.2-0.15-0.3-0.33-0.3h-0.41v0.89h0.2v-0.31h0.08l0.260.31h0.22v-0.04l-0.25-0.28c0.12-0.030.22-0.120.22-0.27zm-0.330.13h-0.2v-0.26h0.2c0.08 0 0.130.040.130.1300.08-0.060.13-0.130.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGeocaching;
