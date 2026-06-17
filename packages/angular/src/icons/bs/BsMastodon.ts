import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-mastodon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMastodon {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.19 12.2c2.02-0.24 3.77-1.47 3.99-2.60.35-1.780.32-4.340.32-4.34 0-3.47-2.29-4.49-2.29-4.49C12.060.24 10.080.02 8.03 0h-0.05C5.920.02 3.940.24 2.790.77c0 0-2.28 1.02-2.28 4.49l00.66c00.64-0.01 1.350.01 2.090.08 3.390.63 6.74 3.78 7.57 1.450.38 2.70.46 3.710.41 1.82-0.1 2.85-0.65 2.85-0.65l-0.06-1.32s-1.30.41-2.770.36c-1.45-0.05-2.98-0.16-3.21-1.93a4 4 0 0 1-0.03-0.5s1.420.35 3.230.43c1.10.05 2.14-0.06 3.19-0.19zm1.61-2.47H11.13v-4.08c0-0.86-0.36-1.29-1.09-1.29-0.8 0-1.210.52-1.21 1.54v2.23H7.17V5.89c0-1.02-0.4-1.54-1.21-1.54-0.73 0-1.090.44-1.09 1.3v4.08H3.2V5.52q0-1.290.66-2.05c0.46-0.5 1.05-0.76 1.79-0.760.86 0 1.50.33 1.930.98L8 4.39l0.42-0.69c0.43-0.65 1.08-0.98 1.93-0.980.74 0 1.340.26 1.790.76q0.660.760.66 2.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMastodon;
