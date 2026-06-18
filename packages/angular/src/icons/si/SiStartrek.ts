import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-startrek",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStartrek {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.94 14.6c0.09 0 0.30.10.580.46a57.71 57.71 0 0 1 2.17 3.23c-1.630.65-3.59 1.01-5.68 1.01-0.99 0-1.95-0.1-2.86-0.26 1.42-1.51 2.92-2.86 4.7-3.980.56-0.280.82-0.46 1.1-0.46zm2.42-6.2c2.86 1.06 4.79 2.91 4.79 5 0 1.42-0.88 2.73-2.34 3.76-0.38-2.26-0.9-4.48-1.64-6.62a38.69 38.69 0 0 0-0.81-2.14zM7.73 8.08a38.97 38.97 0 0 0-1.1 3.29 56.36 56.36 0 0 0-1.33 6.4c-2.11-1.1-3.46-2.69-3.46-4.380-2.27 2.44-4.34 5.89-5.31zM12.460.09c-0.09 0-0.08-0.01-0.170.09a25.88 25.88 0 0 0-3.66 5.77C3.63 6.89 0 9.89 0 13.39c0 2.59 1.99 4.9 5.05 6.32a64.85 64.85 0 0 0-0.35 4.01c0 0.090.110.20.20.2h0.09c0.09 0 0.080.010.17-0.09a79.76 79.76 0 0 1 2.54-3.2c1.340.34 2.780.52 4.30.52 2.46 0 4.74-0.48 6.64-1.30.460.770.91 1.56 1.39 2.4 0 0.090.190.090.290.09a0.180.18 0 0 0 0.17-0.17 69.57 69.57 0 0 0-0.35-3.09c2.37-1.42 3.87-3.45 3.87-5.68 0-3.25-3.16-6.07-7.61-7.21a33.53 33.53 0 0 0-3.75-6c0-0.09-0.08-0.09-0.17-0.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStartrek;
