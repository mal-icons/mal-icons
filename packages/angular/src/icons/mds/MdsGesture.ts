import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-gesture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsGesture {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.59 6.89c0.7-0.71 1.4-1.35 1.71-1.220.50.2 0 1.03-0.3 1.52-0.250.42-2.86 3.89-2.86 6.31 0 1.280.48 2.34 1.34 2.980.750.56 1.740.73 2.640.46 1.07-0.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.780.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-0.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-0.580.73-2.06 2.48-2.29 2.72-0.250.3-0.680.84-1.110.84-0.45 0-0.72-0.83-0.36-1.920.35-1.09 1.4-2.86 1.85-3.520.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-0.360.36-0.660.66-0.880.93l1.75 1.71zm9.29 11.66c-0.31 0-0.74-0.26-0.74-0.72 0-0.60.73-2.2 2.87-2.76-0.3 2.69-1.43 3.48-2.13 3.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsGesture;
