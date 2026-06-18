import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-viadeo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiViadeo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.29 13.9c0.360.880.54 1.840.54 2.88 0 1.93-0.66 3.62-1.98 5.06C13.54 23.28 11.84 24 9.77 24c-2.08 0-3.78-0.72-5.1-2.16-1.32-1.44-1.98-3.13-1.98-5.06 0-1.910.62-3.57 1.87-4.98C5.94 10.24 7.67 9.47 9.77 9.47c0.88 0 1.70.14 2.450.41-0.250.48-0.47 1.07-0.53 1.7-0.6-0.25-1.24-0.38-1.93-0.38-1.45 0-2.70.55-3.74 1.64-1.04 1.09-1.56 2.41-1.56 3.96 0 10.24 1.930.71 2.790.480.86 1.12 1.53 1.92 20.810.47 1.690.7 2.660.70.97 0 1.86-0.23 2.66-0.70.81-0.47 1.45-1.14 1.92-20.83-1.50.96-3.460.3-5.040.47-0.1 1.05-0.29 1.65-0.67zM20.390.43l-0.01-0.01c-0.76 1.62-2.16 1.92-2.16 1.92-1.40.36-1.890.9-1.890.9-1.4 1.42-0.29 3.13-0.29 3.13 3.03-0.69 4.14-3.19 4.14-3.19-0.13 1.68-3.73 3.66-3.73 3.66 1.19 1.17 2.33 1.03 3.080.581-0.59 1.48-1.9 1.48-1.90.97-2.9-0.6-5.1-0.6-5.1zM7.03 20.47s0.430.070.910.05c0 0 10.33-7.02 7.61-14.31l-0.04-0.12v0.01c0.030.49-4.48 13.06-8.48 14.37zm8.38-15.19C15.05 1.41 12.93 0 12.93 0c1.49 2.51 2.3 4.77 2.48 5.31 0-0.010-0.020-0.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiViadeo;
