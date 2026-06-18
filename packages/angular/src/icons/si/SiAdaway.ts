import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-adaway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAdaway {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.05 0 0.01 7.02 0 16.95l7.02 7.04 9.940.01 7.04-7.01L24 7.05 16.980.01zm-1.87 6.52c0.46-0.05 2.890.98 5.770.99 1.480.09 2.040.52 2.460.960.930.88 1.14 1.32 2.320.760.48-0.23 1.07-1.6 1.74-1.750.52-0.08 1.280.58 1.470.770.210.210.40.40.60.49-0.680.04-1.63 1.63-1.66 2.990.14 3.79-1.57 3.58-3.25 5.44-0.530.51-0.84 1.58-0.84 2.55l-0.7-0.02c-0.420.01-0.89-0.53-1.13-0.9-0.44-0.73-0.90.67-1.58-0.480.03-0.38-1.83-0.46-0.76-1.35 2.53-1.79 3.76-2.17 3.71-2.71-0.06-0.64-1.54-0.06-2.88-0.12-2.21-0.1-1.97-1.5-2.17-2.16-1.86-1.03 1.43-1.52-0.01-1.83-0.7-0.11-1.950.15-2.21-1.070.240.29 3.32-0.3 2.08-0.5-1.72-0.78-2.21-0.36-2.93-1.83-0.12-0.15-0.12-0.22-0.02-0.23Zm12.58 1.9a0.260.26 0 0 0-0.260.260.260.26 0 0 0 0.260.260.260.26 0 0 0 0.26-0.260.260.26 0 0 0-0.26-0.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAdaway;
