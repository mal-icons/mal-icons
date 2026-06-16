import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-radar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsRadar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.74 18.33A9.98 9.98 0 0 0 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10a9.98 9.98 0 0 0 7.11-2.97c0.03-0.030.05-0.060.07-0.080.2-0.20.39-0.410.56-0.62zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.85-0.63 3.54-1.69 4.9l-1.43-1.43c0.69-0.98 1.1-2.17 1.1-3.46 0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6c1.3 0 2.51-0.42 3.49-1.13l1.42 1.42A7.82 7.82 0 0 1 12 20zm1.92-7.49c0.17-0.660.02-1.38-0.49-1.9l-0.02-0.02c-0.77-0.77-2-0.78-2.78-0.04-0.010.01-0.030.02-0.050.04-0.780.78-0.78 2.05 0 2.83l0.020.02c0.520.51 1.250.67 1.910.49l1.51 1.51c-0.60.36-1.290.58-2.040.58-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 0.73-0.21 1.41-0.56 2l-1.5-1.51z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsRadar;
