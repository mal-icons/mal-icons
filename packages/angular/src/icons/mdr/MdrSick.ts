import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23 7c0 1.1-0.9 2-2 2s-2-0.9-2-2c0-0.780.99-2.44 1.58-3.360.2-0.310.64-0.310.84 0C22.01 4.56 23 6.22 23 7zm-1.14 3.38c0.080.530.14 1.070.14 1.62 0 5.52-4.48 10-10.01 10C6.47 22 2 17.52 2 12S6.47 2 11.99 2c2.45 0 4.690.88 6.43 2.34-0.510.95-0.92 1.93-0.92 2.66 0 1.93 1.57 3.5 3.5 3.50.3 0 0.58-0.050.86-0.12zm-7.83-0.35 1.06 1.06c0.290.290.770.29 1.06 0 0.29-0.290.29-0.77 0-1.06l-0.53-0.530.53-0.53c0.29-0.290.29-0.77 0-1.06s-0.77-0.29-1.06 0l-1.06 1.06c-0.290.29-0.290.77 0 1.06zM8.38 9.5l-0.530.53c-0.290.29-0.290.77 0 1.060.290.290.770.29 1.06 0l1.06-1.06c0.29-0.290.29-0.77 0-1.06L8.91 7.91c-0.29-0.29-0.77-0.29-1.06 0s-0.290.77 0 1.06l0.530.53zm8.09 6.3c-1-1.39-2.62-2.3-4.47-2.3-0.87 0-1.690.2-2.430.56L5.99 12c0-0.52-0.26-1.02-0.74-1.29a1.5 1.5 0 0 0-1.73 2.44c0.520.44 1.20.45 1.720.16l2.97 1.72c-0.250.24-0.480.5-0.680.78-0.360.49 0 1.190.62 1.190.23 0 0.46-0.10.6-0.30.72-1.02 1.9-1.7 3.25-1.7s2.530.68 3.25 1.7a0.760.76 0 0 0 1.22-0.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSick;
