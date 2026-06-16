import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-settings",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSettings {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.14 12.94c0.04-0.30.06-0.610.06-0.94 0-0.32-0.02-0.64-0.07-0.94l2.03-1.58a0.490.49 0 0 0 0.12-0.61l-1.92-3.32a0.490.49 0 0 0-0.59-0.22l-2.390.96c-0.5-0.38-1.03-0.7-1.62-0.94l-0.36-2.54a0.480.48 0 0 0-0.48-0.41h-3.84c-0.24 0-0.430.17-0.470.41l-0.36 2.54c-0.590.24-1.130.57-1.620.94l-2.39-0.96c-0.22-0.08-0.47 0-0.590.22L2.74 8.87c-0.120.21-0.080.470.120.61l2.03 1.58c-0.050.3-0.090.63-0.090.94s0.020.640.070.94l-2.03 1.58a0.490.49 0 0 0-0.120.61l1.92 3.32c0.120.220.370.290.590.22l2.39-0.96c0.50.38 1.030.7 1.620.94l0.36 2.54c0.050.240.240.410.480.41h3.84c0.24 0 0.44-0.170.47-0.41l0.36-2.54c0.59-0.24 1.13-0.56 1.62-0.94l2.390.96c0.220.080.47 0 0.59-0.22l1.92-3.32c0.12-0.220.07-0.47-0.12-0.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSettings;
