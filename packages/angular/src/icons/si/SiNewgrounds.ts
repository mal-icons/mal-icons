import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-newgrounds",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNewgrounds {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.19 3.24C0.4 3.970 4.880 5.97v15.58c-0.020.240.10.360.370.36H3.07c0.24 0 0.37-0.120.37-0.36V6.03c0-0.40.21-0.610.64-0.61H6.29c0.41 0 0.610.20.610.61v15.52c0 0.240.140.360.430.36h2.64c0.24 0 0.37-0.120.4-0.36V5.97c-0.02-1.09-0.41-2-1.18-2.73A4.05 4.05 0 0 0 6.29 2.08H4.07c-1.13 0-2.10.39-2.89 1.15m20.9 18.11c0.26-0.160.51-0.340.73-0.550.79-0.77 1.19-1.68 1.19-2.73v-5.62c-0.02-0.26-0.15-0.39-0.39-0.39h-4.37c-0.26 0-0.390.13-0.390.39v2.52c0 0.260.130.40.40.4h0.94c0.24 0 0.370.140.370.43v2.28c0 0.39-0.190.58-0.580.58h-2.25c-0.42 0-0.64-0.19-0.64-0.58V6.03c0-0.40.21-0.610.64-0.61h2.25c0.39 0 0.580.20.580.61V8.34c-0.020.240.110.370.40.39h2.67c0.24-0.020.38-0.150.4-0.39V5.97c0-1.07-0.39-1.98-1.18-2.73-0.81-0.77-1.76-1.15-2.85-1.15h-2.25c-1.11 0-2.070.39-2.85 1.15-0.830.75-1.24 1.66-1.22 2.73v12.09c-0.02 1.050.39 1.97 1.22 2.730.220.20.470.390.730.550.630.39 1.340.58 2.130.58h2.25c0.79 0 1.5-0.19 2.13-0.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNewgrounds;
