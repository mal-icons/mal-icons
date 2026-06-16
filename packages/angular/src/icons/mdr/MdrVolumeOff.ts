import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-volume-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrVolumeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.63 3.63a11 0 0 0 0 1.41L7.29 8.7 7 9H4c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h3l3.29 3.29c0.630.63 1.710.18 1.71-0.71v-4.17l4.18 4.18c-0.490.37-1.020.68-1.60.91-0.360.15-0.580.53-0.580.92 0 0.720.73 1.18 1.390.910.8-0.33 1.55-0.77 2.22-1.31l1.34 1.34a11 0 1 0 1.41-1.41L5.05 3.63c-0.39-0.39-1.02-0.39-1.42 0zM19 12c0 0.82-0.15 1.61-0.41 2.34l1.53 1.53c0.56-1.170.88-2.480.88-3.87 0-3.83-2.4-7.11-5.78-8.4-0.59-0.23-1.220.23-1.220.86v0.19c0 0.380.250.710.610.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29-0.170.17L12 7.76V6.41c0-0.89-1.08-1.33-1.71-0.7zM16.5 12A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c0.01-0.080.02-0.160.02-0.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrVolumeOff;
