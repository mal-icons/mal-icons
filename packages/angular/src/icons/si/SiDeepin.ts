import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-deepin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDeepin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.10.7c-1.72-0.63-3.49-0.8-5.2-0.64-1.990.16-2.960.77-2.90.66-3.25 1.16-6 3.66-7.27 7.16-2.27 6.230.94 13.13 7.17 15.4 6.23 2.27 13.11-0.94 15.38-7.18C25.54 9.86 22.33 2.97 16.10.7zM8.31 22.15a10.77 10.77 0 0 1-1.87-0.9c2.90.22 6.69-0.44 9.24-2.83 0 0 4.87-3.89 1.35-10.27 0 0 0.57 2.57-0.16 4.69 0 0-0.69 2.88-3.76 3.71-4.52 1.23-9.66-1.93-11.82-3.46-0.16-1.57-0.02-3.20.56-4.790.86-2.35 2.46-4.19 4.43-5.42-0.49 3.44-0.1 6.60.46 7.930.75 1.78 2.05 3.85 4.59 4.12 2.540.27 3.94-2.11 3.94-2.11 1.3-1.98 1.51-4.82 1.49-4.89-0.02-0.07-0.35-0.26-0.35-0.26-0.88 3.55-2.32 4.73-2.32 4.73-2.28 2.2-3.890.68-3.890.68-1.74-1.86-0.52-4.89-0.52-4.890.68-2.06 2.66-5.08 4.91-6.620.370.090.750.15 1.120.28a10.71 10.71 0 0 1 3.55 2.16c-1.640.6-4.29 1.87-4.29 1.87-4.2 1.77-4.49 4.45-4.49 4.45-0.43 2.76 1.75 1.59 1.75 1.59 2.25-1.1 3.36-4.52 3.36-4.52-0.7-0.13-1.260.08-1.260.08-0.9 2.22-2.73 3.13-2.73 3.13-0.720.38-0.89-0.29-0.89-0.29-0.12-0.510.52-0.590.52-0.59 1-0.39 1.64-1.44 1.78-1.870.14-0.430.41-0.460.41-0.46a13 13 0 0 1 2.62-0.53c1.7-0.21 4.30.6 4.30.60.580.24 1.140.41 1.640.550.95 2.38 1.11 5.10.16 7.7-2.04 5.61-8.24 8.5-13.84 6.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDeepin;
