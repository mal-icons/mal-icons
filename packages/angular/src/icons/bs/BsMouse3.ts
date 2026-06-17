import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-mouse3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMouse3 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 0q-0.890-1.530.46c-0.420.3-0.720.73-0.93 1.21C4.12 2.62 4 3.88 4 5.19v0.5L3.38 6A2.5 2.5 0 0 0 2 8.24v2.58C2 13.66 4.22 16 7 16h2c2.78 0 5-2.34 5-5.19V5.19c0-1.13-0.27-2.04-0.75-2.77-0.47-0.73-1.13-1.24-1.85-1.59C9.980.12 8.26 0 7 0m2.5 6.1V1.23c0.510.11 1.010.27 1.460.490.60.29 1.10.69 1.46 1.240.360.540.59 1.260.59 2.23v1.69zm-1-5.03v4.8L5 5.1c0.01-1.240.13-2.290.46-3.020.16-0.370.36-0.630.6-0.8C6.29 1.11 6.59 1 7 1c0.47 0 0.980.02 1.50.07M5 6.12 13 7.9v2.91C13 13.15 11.19 15 9 15H7c-2.19 0-4-1.85-4-4.19V8.24a1.5 1.5 0 0 1 0.83-1.34l0.19-0.09c0.010.270.020.580.050.920.060.940.19 2.120.46 2.94a0.50.5 0 1 0 0.95-0.32c-0.23-0.68-0.35-1.75-0.41-2.69a29 29 0 0 1-0.06-1.53v0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMouse3;
