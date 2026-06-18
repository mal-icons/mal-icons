import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-android",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAndroid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.44 5.56c-0.67 1.17-1.35 2.33-2.03 3.5-0.04-0.02-0.07-0.03-0.11-0.04-1.82-0.7-3.48-0.8-4.42-0.79-1.860.02-3.350.46-4.260.82-0.08-0.15-1.75-3.02-2.02-3.49a1.15 1.15 0 0 0-0.14-0.19c-0.33-0.36-0.91-0.49-1.38-0.2-0.470.28-0.710.94-0.39 1.5 1.95 3.37-0.1-0.22 1.95 3.360.020.03-0.490.26-1.39 1.02C2.9 12.180.45 14.77 0 18.99h24c-0.12-1.11-0.37-2.1-0.75-3.07-0.74-1.91-1.84-3.29-2.74-4.18a12.1 12.1 0 0 0-2.13-1.69c0.66-1.12 1.31-2.26 1.96-3.380.21-0.360.19-0.8-0.01-1.12a1.1 1.1 0 0 0-0.85-0.53c-0.52-0.05-0.940.31-1.050.54zm-0.04 8.46c0.390.590.32 1.33-0.16 1.65-0.480.32-1.190.1-1.58-0.49-0.39-0.59-0.32-1.330.16-1.650.47-0.31 1.18-0.11 1.580.49zM7.21 13.53c0.480.320.55 1.060.16 1.65-0.390.59-1.10.81-1.580.49-0.48-0.32-0.55-1.06-0.16-1.650.4-0.6 1.11-0.81 1.58-0.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAndroid;
