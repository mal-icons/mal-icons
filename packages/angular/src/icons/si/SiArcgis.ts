import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-arcgis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiArcgis {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a0.850.85 0 0 0-0.340.07l-8.52 3.69C2.15 4.2 1.5 5.18 1.5 6.27v13.25l10.16 4.41c0.220.090.460.090.680l8.52-3.7c1-0.43 1.64-1.42 1.64-2.5V4.48L12.340.07C12.230.02 12.120 12 0Zm0 4.84c4.16 0 7.54 3.37 7.54 7.54S16.16 19.91 12 19.91c-4.16 0-7.54-3.37-7.54-7.54S7.84 4.84 12 4.84zm-0.35 1.39c-0.9-0.02-2.330.24-3.75 1.610.350.550.650.980.49 1.42-0.230.66-0.510.51-1.070.99-0.40.340.21 1.01-0.31 1.31-0.520.29-1.210.66-0.95 1.180.260.51 1.470.83 1.96 1.080.490.250.930.710.61 1.24-0.310.52-0.54 1.13-0.6 1.61 1.050.94 2.45 1.52 3.97 1.52 3.29 0 5.82-2.71 5.96-60.04-0.93-0.94-0.94-1.53-0.94 0 0 0.340.920.02 1.44-0.320.51-0.850.76-0.83 1.380.010.62-0.94 1.6-1.26 1.95-0.320.35-0.920.75-1.13-0.06-0.21-0.81-0.13-1.480.11-2.050.23-0.57-0.22-0.75-0.92-0.76-0.7-0.01-1.08-0.11-1.19-1.19-0.09-0.89 1.24-1.84 1.81-1.840.33 0 1.450.22 1.51-0.340.08-0.86-0.82-1.04-1.04-1.6C13.29 7.59 14.99 6.61 12 6.25c-0.1-0.01-0.22-0.02-0.35-0.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiArcgis;
