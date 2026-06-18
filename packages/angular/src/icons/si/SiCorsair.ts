import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-corsair",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCorsair {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.070.41s1.91 3.88 1.56 5.5c0 0 4.99 1.62 5.54 4.28 0 0 2.73-3.59-7.1-9.77m-1.92 5.83c0.49 1.020.71 2.120.99 3.26L9.3 8.42c0.26-1.73-1.42-4.35-1.42-4.35zM6.11 8.91c0.310.830.67 1.870.86 2.77l-2.56-0.64c0.26-1.73-1.36-3.81-1.36-3.81zm5.59-4.15s11.44 8.03 12.19 11.15c0.57 2.34-1.08 4.51-1.08 4.51s-0.88-6.12-22.8 3.17c2.22-2.47 3.43-5.63 3.11-9.04a11.5 11.5 0 0 0-1.08-3.93l5.14 2.720.020.24c0.2 2.090.04 4.11-0.43 5.99a14.1 14.1 0 0 0 1.31-7.35A14.1 14.1 0 0 0 6.91 7.76l5.49 3.66c0.020.180.040.370.050.550.22 2.310 4.55-0.59 6.59 1.29-2.39 1.93-5.15 1.66-8.04a14.1 14.1 0 0 0-1.82-5.75"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCorsair;
