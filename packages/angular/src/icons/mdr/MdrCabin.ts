import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-cabin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCabin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.37 3.55C4.89 2.62 5.87 2 7 2c0.38 0 0.72-0.220.89-0.530.15-0.310.5-0.470.84-0.470.74 0 1.260.80.9 1.45C9.11 3.38 8.13 4 7 4c-0.38 0-0.720.22-0.890.53-0.150.31-0.50.47-0.840.47-0.74 0-1.26-0.8-0.9-1.45zm18.02 8.64c-0.340.44-0.960.52-1.40.19l-0.99-0.76V20c0 0.55-0.45 1-1 1H5c-0.55 0-1-0.45-1-1v-8.38l-0.990.76a0.990.99 0 0 1-1.4-0.19c-0.33-0.44-0.25-1.070.19-1.4L4 9.11V7c0-0.550.45-1 1-1s1 0.45 1 1v0.58l5.39-4.12c0.36-0.270.86-0.27 1.21 0l9.6 7.33c0.440.340.530.970.19 1.4zM10.06 7h3.89L12 5.52 10.06 7zM6 10.1v0.9h12v-0.9L16.56 9H7.44L6 10.1zM6 13v2h12v-2H6zm12 6v-2H6v2h12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCabin;
